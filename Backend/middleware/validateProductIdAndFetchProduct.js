// middleware/validateProductIdAndFetchProduct.js
const Product = require('../models/product');
const { isValidObjectId } = require('mongoose');
const ErrorHandler = require('../utilities/errorHandler');

const validateProductIdAndFetchProduct = async (req, res, next) => {
	const productId = req.params._id;

	if (!isValidObjectId(productId)) {
		return next(new ErrorHandler('Invalid product ID.', 400));
	};

	const product = await Product.findById(productId); // returns null if no product is found

	if (!product) {
		return next(new ErrorHandler('No product with the provided ID was found.', 404));
	};

	// If everything is valid, store the product for later use
	req.product = product;
	next();
}

module.exports = validateProductIdAndFetchProduct;
