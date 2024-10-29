const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const userDto = require('../dtos/userDto');
const dtoMiddleware = require('../middlewares/dtoMiddleware');
const authMiddleware=require('../middlewares/authMiddleware')
router.post('/register', userDto.userRegisterDTO, dtoMiddleware, userController.register)
router.get('/getUser',authMiddleware.jwtMiddleware,userController.getUser)
router.post('/addToCart',authMiddleware.jwtMiddleware,userController.addToCart);
router.post('/toggleProduct',authMiddleware.jwtMiddleware,userController.toggleWishList)
router.post('/purchase',authMiddleware.jwtMiddleware,userController.purchase)
module.exports = router