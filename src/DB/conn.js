const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mhaseebtufail:haseeb123@cluster.ocwdiqu.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connection sucessful");
}).catch((error)=>{
    console.log("No connection");
})
