const productModel=require("../models/productModel");

exports.getProducts=async()=>
{
    try
    {
        const products=await productModel.find();
        return products;
    }
    catch(error)
    {
        console.log(error);
    }
}

exports.addProduct=async(name,price)=>
{
    try
    {
        const newProduct=new productModel({name,price});
        await newProduct.save();
        return true;
    }
    catch(error)
    {
        console.log(error);
        return false;
    }
}