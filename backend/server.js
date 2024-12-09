const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.json())

const PORT = process.env.PORT | 8000;

require('./config/config')();

app.listen(PORT, ()=>{
    console.log(`Server started at PORT: ${PORT}`);
})
