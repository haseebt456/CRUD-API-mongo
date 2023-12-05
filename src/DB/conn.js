const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mhaseebtufail:ezcV21otwVMTNNJI@cluster.ocwdiqu.mongodb.net/Tasks?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connection sucessful");
}).catch((error)=>{
    console.log("No connection");
})