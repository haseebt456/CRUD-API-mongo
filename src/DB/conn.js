const mongoose = require('mongoose');
const mongoConnectionURL = process.env.MONGO_URL;

mongoose.connect(mongoConnectionURL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Connection sucessful");
}).catch((error)=>{
    console.log("No connection");
})
