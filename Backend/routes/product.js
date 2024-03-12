const express = require('express');
const router = express.Router();

const { newProduct, updateProduct, getProduct, getAllProducts } = require('../controllers/productController');

router.route('/admin/product/new').post(newProduct);
router.route('/admin/product/:id/update').put(updateProduct);

router.route('/product/get/:id').get(getProduct);
router.route('/products').get(getAllProducts);

module.exports = router;