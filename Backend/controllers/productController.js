const Product = require('../models/product');
const { isProductIdProvided } = require('../utilities/helpers');

// TODO: I think we will end up getting rid of isProductIdProvided and replace it with a single findById

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
    try {
        const productId = req.params._id;

        isProductIdProvided(productId);

        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
            new: true,
            runValidators: true
        });

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: 'No product with the provided ID was found.'
            })
        };

        res.status(200).json({
            success: true,
            message: 'Product updated successfully.',
            data: updatedProduct
        })

    } catch (error) {

        // if (error instanceof mongoose.Error.ValidationError) {
        //     res.status(400).json({
        //         success: false,
        //         error: "Validation failed. Please check your input." 
        //     });
        // } else {
        //     console.error(error);
        //     res.status(500).json({
        //         success: false,
        //         error: "An internal server error occurred."
        //     }); // TEMPORARY: Best to handle errors in a centralized manner |  

        res.status(500).json({
            success: false,
            error: error.message
        })
    }
};


// => /product/:_id
exports.getProduct = async (req, res, next) => {
    try {
        const productId = req.params._id;

        isProductIdProvided(productId);

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'No product with the provided ID was found.'
            })
        }

        res.status(200).json({
            success: true,
            data: product
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
};


// => /products
exports.getAllProducts = async (req, res, next) => {
    try {
        const allProducts = await Product.find({});

        res.status(200).json({
            success: true,
            data: allProducts
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
};


// => /admin/product/:_id/delete
exports.deleteProduct = async (req, res, next) => {
    try {
        const productId = req.params._id;

        isProductIdProvided(productId);

        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: 'No product found with this ID.'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Product deleted successfully.'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}