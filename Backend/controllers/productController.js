const Product = require('../models/product');

exports.newProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);

        res.status(201).json({
            success: true,
            data: product,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message, 
        });
    }

};

exports.getProducts = (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Renders all products in DB.',
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        })
    }

};