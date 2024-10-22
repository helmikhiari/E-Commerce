const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const userDto = require('../dtos/userDto');
const dtoMiddleware=require('../middlewares/dtoMiddleware');
router.post('/register', userDto.userRegisterDTO,dtoMiddleware, userController.register)


module.exports = router