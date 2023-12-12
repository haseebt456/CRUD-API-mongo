const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mhaseebtufail:ezcV21otwVMTNNJI@cluster.ocwdiqu.mongodb.net/Store")
.then(()=>{
    console.log("Connection sucessful");
}).catch((error)=>{
    console.log("No connection");
})
