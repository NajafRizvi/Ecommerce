import express from 'express';
import data from './products.json';
const app = express();
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
  
  app.listen(5000, () => { console.log("Server started at http://localhost:5000")})