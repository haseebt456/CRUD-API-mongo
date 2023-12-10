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
        res.send(insert);
    }
    catch(e){
        res.send(e);
    }
})

app.listen(port,()=>{
    console.log(`Connection is live at pont no. ${port}`)
})