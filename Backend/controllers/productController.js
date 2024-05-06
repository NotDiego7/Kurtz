// controllers/productController.js
const Product = require('../models/product');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const validateProductIdAndFetchProduct    = require('../middleware/validateProductIdAndFetchProduct');


// => /admin/product/new
exports.newProduct = catchAsyncErrors( async (req, res, next) => {
    const product = await Product.create(req.body);
        
    res.status(201).json({
        success: true,
        message: 'Product created successfully.',
        data: product
    });
});


// => /admin/product/:_id/update
exports.updateProduct = catchAsyncErrors( async (req, res, next) => {
    await validateProductIdAndFetchProduct(req, res, next)

    const updatedProduct = await req.product.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        message: 'Product updated successfully.',
        data: updatedProduct
    });
});


// => /product/:_id
exports.getProduct = catchAsyncErrors( async (req, res, next) => {
    await validateProductIdAndFetchProduct(req, res, next);

    res.status(200).json({
      success: true,
      data: req.product
    });
});


// => /products
exports.getAllProducts = catchAsyncErrors( async (req, res, next) => {
        const allProducts = await Product.find({});

        res.status(200).json({
            success: true,
            data: allProducts
        });
});


// => /admin/product/:_id/delete
exports.deleteProduct = catchAsyncErrors( async (req, res, next) => {
    await validateProductIdAndFetchProduct(req, res, next);

    await req.product.remove(); 
  
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully.'
    });
});