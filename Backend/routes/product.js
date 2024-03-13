const express = require('express');
const router = express.Router();

const { newProduct, updateProduct, getProduct, getAllProducts } = require('../controllers/productController');

router.route('/admin/product/new').post(newProduct);
router.route('/admin/product/:_id').put(updateProduct);

router.route('/product/get/:_id').get(getProduct);
router.route('/products').get(getAllProducts);

router.route('/admin/product/:_id/delete').delete(PENDING)

module.exports = router;