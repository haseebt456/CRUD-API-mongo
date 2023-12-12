const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_name:{
        type:String,
    },
    price:{
        type:Number,
    },
    stock:{
        type:Number
    }
});

//we are creating a new collection

const Products = new mongoose.model("Products",productSchema);

module.exports = Products;