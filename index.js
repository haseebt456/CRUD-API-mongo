const express = require('express');
const router = require("./src/routers/router");
const cors = require('cors');
const bodyParser = require('body-parser');
require('./src/DB/conn')
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: "*"
}));
app.use(express.json());
app.use(router);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(port,()=>{
    console.log(`Connection is live at port no. ${port}`)
})