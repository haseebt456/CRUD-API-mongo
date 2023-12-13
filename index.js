const express = require('express');
const router = require("./src/routers/router");
require('./src/DB/conn')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`Connection is live at port no. ${port}`)
})