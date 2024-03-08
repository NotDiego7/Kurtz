const express = require('express');
const router = express.Router();

const { newProduct, getProduct, getAllProducts } = require('../controllers/productController');

router.route('/product/new').post(newProduct);
router.route('/product/get/:id').get(getProduct);
router.route('/products').get(getAllProducts);

module.exports = router;