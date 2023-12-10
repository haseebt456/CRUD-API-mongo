const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Database")
.then(()=>{
    console.log("Connection sucessful");
}).catch((error)=>{
    console.log("No connection");
})