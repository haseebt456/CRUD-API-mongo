const express = require('express');

require('../src/DB/conn')
const app = express();

app.get("/",async (request,response)=>{
    response.send("Hello");
});

app.listen(3000,()=>{
    console.log("Connection is live at pont no. 3000");
})