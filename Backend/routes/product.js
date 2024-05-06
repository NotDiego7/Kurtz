// routes/product.js
const express = require('express');
const router = express.Router();


const { newProduct, updateProduct, getProduct, getAllProducts, deleteProduct } = require('../controllers/productController');

router.route('/admin/product/new').post(newProduct);
router.route('/admin/product/:_id/update').put(updateProduct);

router.route('/product/:_id').get(getProduct);
router.route('/products').get(getAllProducts);

router.route('/admin/product/:_id/delete').delete(deleteProduct);

module.exports = router;