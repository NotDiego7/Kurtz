const Product = require('../models/product');
const ErrorHandler = require('../utilities/errorHandler');
const { isValidObjectId } = require('mongoose');
// TODO -> Production || Development Error Handling Separation


// => /admin/product/new
exports.newProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        
        res.status(201).json({
            success: true,
            message: 'Product created successfully.',
            data: product
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};


// => /admin/product/:_id/update
exports.updateProduct = async (req, res, next) => {
    const productId = req.params._id;

    if (!isValidObjectId(productId)) {
        return next(new ErrorHandler('Invalid product ID.', 404));
    };

    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
        new: true,
        runValidators: true
    });

    if (!updatedProduct) {
        return next(new ErrorHandler('No product with the provided ID was found.', 404));
    };

    res.status(200).json({
        success: true,
        message: 'Product updated successfully.',
        data: updatedProduct
    });
};


// => /product/:_id
exports.getProduct = async (req, res, next) => {
    const productId = req.params._id;

    if (!isValidObjectId(productId)) {
        return next(new ErrorHandler('Invalid product ID.', 404));
    };

    const product = await Product.findById(productId);

    if (!product) {
        return next(new ErrorHandler('Product not found.', 404));
    };
    
    res.status(200).json({
        success: true,
        data: product
    });

};


// => /products
exports.getAllProducts = async (req, res, next) => {
    try {
        const allProducts = await Product.find({});

        res.status(200).json({
            success: true,
            data: allProducts
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};


// => /admin/product/:_id/delete
exports.deleteProduct = async (req, res, next) => {
    const productId = req.params._id;

    if (!isValidObjectId(productId)) {
        return next(new ErrorHandler('Invalid product ID.', 404));
    };

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
        return next(new ErrorHandler('No product with the provided ID was found.', 404));
    };

    res.status(200).json({
        success: true,
        message: 'Product deleted successfully.'
    });
}