const productModel = require("../models/productModel");
const variantModel = require("../models/productVariantsModel")
exports.getProducts = async () => {
    try {
        const products = await productModel.find();
        return products;
    }
    catch (error) {
        console.log(error);
    }
}

exports.addProduct = async (name, price,img) => {
    try {
        const newProduct = new productModel({ name, price,image:`http://localhost:5000/uploads/${img.filename}` });
        await newProduct.save();
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

exports.checkVariant = async (variantID) => {
    try {
        const variant = await variantModel.findById(variantID)
        return !!variant;
    }
    catch (error) {
        console.log(error);
    }
}

exports.checkStock = async (quantity, variantID) => {
    try {
        const variant = await variantModel.findById(variantID)
        return variant.quantity >= quantity;
    }
    catch (error) {
        console.log(error);
    }
}

exports.checkProduct=async(productID)=>
{
    try {
        const product=await productModel.findById(productID);
        return !!product;
    } catch (error) {
        console.log(error);
    }
}


exports.addVariant=async (productID,color,size,quantity)=>
{
    try {
        const product=await productModel.findById(productID);
        const newVariant=new variantModel({productID,color,size,quantity});
        await newVariant.save();
        product.details.push(newVariant);
        await product.save();
        return true;
    } 
    catch (error) {
        return false;
        console.log(error);
    }
}