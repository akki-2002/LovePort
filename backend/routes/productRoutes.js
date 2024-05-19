const express = require('express')
const {addProduct, removeProduct, updateProduct, getAllProducts} = require('../controllers/productController')
const router = express.Router()

router.get('/getProducts', getAllProducts)

router.post('/addProduct', addProduct)

router.patch('/updateProduct/:id', updateProduct)

router.delete('/deleteProduct/:id', removeProduct)

module.exports = router