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
app.get("/Products/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const getProduct = await Products.findById({_id});
        res.send(getProduct);
    }
    catch(e){
        res.status(400).send(e);
    }
});
app.patch("/Products/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const updProduct = await Products.findByIdAndUpdate (_id,req.body,{
            new:true//for returning updated data
        });
        res.send(updProduct);
    }
    catch(e){
        res.status(400).send(e);
    }
});

app.listen(port,()=>{
    console.log(`Connection is live at pont no. ${port}`)
})