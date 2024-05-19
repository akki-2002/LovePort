const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const productRoutes = require('./routes/productRoutes')

const app = express();

app.use(express.json())
app.use(cors())

try{
    mongoose.connect(process.env.MONGO_URI)

    console.log('Listening to database & listening to port ', process.env.PORT)
}catch(error)
{
    console.log('error conneting to the database ', error)
}

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})
app.use('/products', productRoutes)

app.listen(process.env.PORT, ()=>{
    console.log("Connected to the port", process.env.PORT)
})