const productService = require('../services/productService')
exports.getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();
        return res.status(200).send(products);
    }
    catch (error) {
        console.log("controller error : " + error);
    }
}

exports.addProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const added = await productService.addProduct(name, price);
        if (!added)
            return res.status(409).json({ message: "product add failed " });
        return res.status(201).json({ message: "product added" })
    }
    catch (error) {
        console.log("controller error : " + error);
    }
}

exports.addVariant=async(req,res)=>
{
    try {
        const {color,size,quantity,productID}=req.body;
        if (!productService.checkProduct(productID))
        {
            return res.status(404).json({message:"Product Not Found"});
        }
        const added=productService.addVariant(productID,color,size,quantity);
        if (!added)
        {
            return res.status(400).json({message:"Add failed"});
        }
        return res.status(201).json({message:"Variant Added Successfully"});
    } 
    catch (error) {
        
    }
}
