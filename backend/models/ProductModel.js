const express = require('express')
const mongoose = require('mongoose')

const productModel = mongoose.Schema({
    productImages:[{
        type: String
    }],
    name: {
        type: String
    },
    gender:{
        type: String
    },
    sizes:[{
        type: String
    }],
    colors:[{
        type: String
    }],
    quantity:{
        type: String
    },
    likes:{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User'
        type: String
    },
    description:{
        descText:{
            type:String
        },
        composition:{
            type: String
        },
        gsm:{
            type: String
        },
        color:{
            type: String
        },
        countryOfProduction:{
            type: String
        },
        washCare:{
            type: String
        },
        sizing:{
            type: String
        },
        estOrderProcessTime:{
            type: String
        }
    },
    itemInStock:{
        type: Boolean
    }
}, {timestamps: true})

module.exports = mongoose.model('Product', productModel)