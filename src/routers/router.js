const express = require("express");
const router = express.Router();
const Products = require("../models/product");

router.post("/Products",async (req,res)=>{
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

router.get("/Products",async (req,res)=>{
    try{
        const getProducts = await Products.find()
        res.send(getProducts);
    }
    catch(e){
        res.status(400).send(e);
    }
});
router.get("/Products/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const getProduct = await Products.findById({_id});
        res.send(getProduct);
    }
    catch(e){
        res.status(400).send(e);
    }
});
router.patch("/Products/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const updProduct = await Products.findByIdAndUpdate (_id,req.body,{
            new:true//for returning updated data
        });
        res.send(updProduct);
    }
    catch(e){
        res.status(500).send(e);
    }
});
router.delete("/Products/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const delProduct = await Products.findByIdAndDelete(_id);
        res.send(delProduct);
    }
    catch(e){
        res.status(500).send(e);
    }
});

module.exports = router