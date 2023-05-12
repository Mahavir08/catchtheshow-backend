const express = require('express');
require('dotenv').config({path:'/Catchtheshow -- Backend/.env'})
const morgan = require('morgan')
const movieJson = require('./Store/movies.json')

const app = express();

app.use(morgan('dev'));
app.use(express.json())

app.get('/homepage', (req,res) => {
    res.json({Movies:movieJson})
})

app.post("/getData", (req,res) => {
    console.log("BODY Passed: ", req.body);
    res.json({Success:true})
})

app.listen(process.env.PORT, () => console.log(`Port Started at ${process.env.PORT}`))