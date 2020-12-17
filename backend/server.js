import express from 'express';
import stripe from 'stripe';
import data from './products.json';
import key from './config/dev'
const app = express();
app.use(express.json())
app.use(express.static('.'));
// app.post("/checkout",async(req,res)=>{
//   const stripe = Stripe('sk_test_51HueyACuy52IK8zWn9Ef86gep5H2mOfUzzG7RyVTKljxYxbvFGkPFGDfhrmo3zOLIrjkGWMtdAggOTPTjkbzbqfA00I2P1sDa0');
//   console.log("Request",req.body);
//   let error;
//   let status;
//   try{
//     const {product,token} = req.body;
//     const customer = await
//     stripe.customers.create({
//       email:token.email,
//       source:token.id
//     })
//   }
//   catch(error){
//     console.error(error);
//   }
// }) 
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
// const YOUR_DOMAIN = 'localhost:3000/AddToCheckout';
// app.post('/create-checkout-session', async (req, res) =>{
//   const Stripe = new stripe("sk_test_51HueyACuy52IK8zWn9Ef86gep5H2mOfUzzG7RyVTKljxYxbvFGkPFGDfhrmo3zOLIrjkGWMtdAggOTPTjkbzbqfA00I2P1sDa0")
//   try{
//     const session = await Stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: [
//         {
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: 'Stubborn Attachments',
//               images: ['https://i.imgur.com/EHyR2nP.png'],
//             },
//             unit_amount: 2000,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${YOUR_DOMAIN}?Success=true`,
//       cancel_url: `${YOUR_DOMAIN}?Cancel=true`,
//     });
//     res.json({ id: session.id });
//   }
//   catch(error){
//     console.log(error)
//   }
//   })
app.listen(8000, () => { console.log("Server started at http://localhost:8000")})