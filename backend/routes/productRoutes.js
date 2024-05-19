const express = require('express')
const multer = require('multer')
const {addProduct, removeProduct, updateProduct, getAllProducts, getOneProduct} = require('../controllers/productController')
const router = express.Router()

//storage and filename setting  
let storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb)=>{
        // cb(null, Date.now(+file+originalname))
        cb(null, file.originalname)
    }
})

let upload = multer({
    storage: storage
})

router.get('/getProducts', getAllProducts)

router.post('/addProduct', upload.single('uploaded_file'), addProduct)

router.patch('/updateProduct/:id', updateProduct)

router.get('/getOneProduct/:id', getOneProduct)

router.delete('/deleteProduct/:id', removeProduct)

module.exports = router