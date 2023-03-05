const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app  = express();
const port = process.env.port || 3000;

app.use(morgan('combined'));

app.get("/",(req,res) =>{

    res.send("index {username: 'folk', custommer:['1','2','3']} ");

});

app.listen(port, ()=>{
    console.log("Lisenting on port" + " " + chalk.green(port));
})