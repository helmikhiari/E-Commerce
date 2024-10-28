const express = require('express')
const router = express.Router()
const productDto=require("../dtos/productDto")
const dtoMiddleware = require('../middlewares/dtoMiddleware');
const productController=require('../controllers/productController');

router.get('/getproducts',productController.getProducts);
router.post('/addProduct',productDto.addProductDto,dtoMiddleware,productController.addProduct)
router.post('/addVariant',productController.addVariant);
module.exports=router;