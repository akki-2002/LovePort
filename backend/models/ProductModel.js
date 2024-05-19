const express = require('express')
const mongoose = require('mongoose')

const productModel = mongoose.Schema({
    productImage:{
        type: String
    },
    name: {
        type: String
    },
    price:{
        type: String
    },
    description:{
        type: String
    },
    quantity:{
        type: String
    },
    productDetails:{
        type: String
    },
    deliveryInfo:{
        type: String
    },
    itemInStock:{
        type: Boolean
    }
}, {timestamps: true})

module.exports = mongoose.model('Product', productModel)