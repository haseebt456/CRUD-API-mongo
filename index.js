const express = require('express');
const router = require("./src/routers/router");
require('./src/DB/conn')
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow any origin to access the resource
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
app.use(express.json());
app.use(router);


app.listen(port,()=>{
    console.log(`Connection is live at port no. ${port}`)
})