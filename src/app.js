const express = require('express');

const app = express();

app.get("/",async (request,response)=>{
    response.send("Hello");
});

app.listen(3000,()=>{
    console.log("Connection is live at pont no. 3000");
})