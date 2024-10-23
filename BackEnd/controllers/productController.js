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

