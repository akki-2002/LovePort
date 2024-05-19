const express = require('express')
const Product = require('../models/ProductModel')

const addProduct = async(req, res)=>{
    const {
        name,
        price,
        description,
        quantity,
        productDetails,
        deliveryInfo,
        itemInStock
    } = req.body;

    // if(req.file){
        // console.log("file is here")
        const productImage = req.file.filename;
    // }
    
    try{
        

        const newProduct = await Product.create({
            productImage,
            name,
            price,
            description,
            quantity,
            productDetails,
            deliveryInfo,
            itemInStock
        });
        res.status(200).json(newProduct)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const removeProduct = async(req, res)=>{
        const {id} = req.params;

        const product = await Product.findOneAndDelete({_id: id})

        if(!product)
            {
                console.log("No such product found")
            }

        res.status(200).json(product)
}

const updateProduct = async(req, res)=>{
    const {id} = req.params

    const updateData = {...req.body}
    try{
        const product = await Product.findOneAndUpdate({_id: id}, updateData, {new: true})

        if(!product)
            {
                res.status(404).json({error: "No such product found"})
            }
            res.status(200).json(product)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const getOneProduct = async(req, res)=>{
    const {id} = req.params;
    const product = await Product.findById(id)
    if(!product)
        {
            res.status(404).json("No such product found!!")
        }

    res.status(200).json(product)
}

const getAllProducts = async(req, res)=>{
    const products = await Product.find({}).sort({createdAt: -1})
    res.status(200).json(products)
}

module.exports = {addProduct, removeProduct, updateProduct, getAllProducts, getOneProduct}