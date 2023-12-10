const express = require('express');

require('./DB/conn')
const Products = require("./models/product");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/Products",async (req,res)=>{
    try{
        const addingProducts = new Products(req.body);
        console.log(req.body);
        const insert = await addingProducts.save();
        res.status(201).send(insert);
    }
    catch(e){
        res.status(400).send(e);
    }
});

app.get("/Products",async (req,res)=>{
    try{
        const getProducts = await Products.find()
        res.send(getProducts);
    }
    catch(e){
        res.status(400).send(e);
    }
});

app.listen(port,()=>{
    console.log(`Connection is live at pont no. ${port}`)
})