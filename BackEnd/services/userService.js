const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const variantModel = require('../models/productVariantsModel')
const userCartModel = require('../models/userCart');
const productModel = require('../models/productModel');
const promoCodesModel=require('../models/promoCodes');
exports.checkUserExists = async (email) => {
    try {
        const user = await userModel.findOne({ email: email })

        return (!!user);
    }
    catch (error) {
        console.log(error);
    }
}

exports.register = async (firstName, lastName, email, password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel({ firstName, lastName, email, password: hashedPassword })
        await newUser.save();
        return true;

    }
    catch (error) {
        console.log(error);
    }
}

exports.getUserbyID = async (id) => {
    try {
        const selections = 'firstName lastName email cart favorites'
        const user = await userModel.findById(id).select(selections);
        return user;
    }
    catch (error) {
        console.log(error);
    }
}

exports.updateUser = async (email, key, value) => {
    try {
        const user = await userModel.findOne({ email });
        user[key] = value;
        await user.save();
        return true;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}


exports.getUserbyProp = async (prop, value) => {
    try {
        const selections = 'firstName lastName email cart favorites'
        const user = await userModel.findById(id).select(selections);
        return user;
    }
    catch (error) {
        console.log(error);
    }
}


exports.addToCart = async (variantID, quantity, userID) => {
    try {
        const user = await userModel.findById(userID);
        // console.log(user)
        const variant = await variantModel.findById(variantID);
        const existingSubCart = await userCartModel.findOne({ userID, variant });
        if (existingSubCart) {
            existingSubCart.quantity += quantity;
            await existingSubCart.save();
            return true;
        }
        const newSubCart = new userCartModel({ userID: user, variant, quantity });
        await newSubCart.save();
        user.cart.push(newSubCart);
        await user.save();
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}


exports.toggleWishList=async(userID,productID)=>
{
    try {
        const user=await userModel.findById(userID);
        const foundProduct=user.favorites.findIndex((product)=>product._id==productID)
        let msg="";
        if (foundProduct!=-1)
        {
            user.favorites.splice(foundProduct,1);
            msg="Removed from"
        }
        else 
        {
            const product=await productModel.findById(productID);
            user.favorites.push(product);
            msg="Added to"
        }
        await user.save();
        return msg

    } catch (error) {
        console.log(error);
        return null;
    }
}


exports.purchase=async(userID,promoCode)=>
{
    try {
        let promo;
        if (promoCode)
        {
            promo=await promoCodesModel.findOne({code:promoCode});
        }
        const user=await userModel.findById('userID');
        for (userCart of user.cart)
        {
            
        }
    } catch (error) {
        
    }
}