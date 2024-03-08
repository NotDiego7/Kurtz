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


exports.getProduct = async (req, res, next) => {
    try {
        console.log('The try block did execute')
        if (!req.params.id) {
            throw new Error("No product ID was passed; Keep in mind, IDs can only be passed via params.");
        }

        const product = await Product.findOne({ id: req.params.id });

        res.status(200).json({
            success: true,
            data: product
        })
    } catch (error) {
        console.log('The try block did NOT execute')
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
};


exports.getAllProducts = async (req, res, next) => {
    try {
        const allProducts = await Product.find({});

        res.status(200).json({
            success: true,
            data: allProducts
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error,
        })
    }
};