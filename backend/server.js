import express from 'express';
import path from 'path';
import config from './config'
import stripe from 'stripe';
import data from './products.json';
import key from './config/dev'
const app = express();
app.use(express.json())

app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});

//Get All data from server
app.get("/api/product", (req, res) => {
    res.send(data);
  });

//Get Specific data from their product
app.get("/api/product/:id", (req, res) => {
  const productID = req.params.id
  const product = data.find(x=>x.id == productID)
  if(product){
    res.send(product)
  }
  else{
    res.status(404).send({mess:"Failed"})
  }
  });

  const Stripe =  stripe(key.stripeSecret)
  app.post('/payment', async (req, res) => {
      try {
          const {amount} = req.body
          console.log(amount)
  
          const paymentIntent = await Stripe.paymentIntents.create({
              amount,
              currency: "USD",
              // Verify your integration in this guide by including this parameter
              metadata: {integration_check: 'accept_a_payment'},
          })
  
          res.status(200).send(paymentIntent.client_secret);
      } catch (error) {
          res.status(500).json({ statusCode: 500, message: err.message });
      }
  
  })

  app.listen(config.PORT, () => {
    console.log('Server started at http://localhost:8000');
  });