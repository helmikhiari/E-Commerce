const express = require('express')
const router = express.Router()
const authDto=require('../dtos/authDto')
const dtoMiddleware = require('../middlewares/dtoMiddleware')
const authController=require('../controllers/authController')
router.post('/login',authDto.loginDto,dtoMiddleware,authController.login)

module.exports=router;