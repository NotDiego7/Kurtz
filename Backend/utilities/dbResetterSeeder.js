// utilities/dbResetterSeeder.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../config/config.env') });

const seedData = require('../data/products.json');
const Product = require('../models/product');

const connectToDatabase = require('../config/database');
connectToDatabase();

console.log('Psst, the resetter/seeder is running')

/**
 * Clears all documents from the products collection.
 * 
 * WARNING: This function deletes all product data from the database.
 * Use with caution.
 * 
 * @returns {Promise} A promise that resolves when the operation is complete.
 */
const clearProductsDB = async () => {
    try {
        await Product.deleteMany({});
        console.log('Successfully cleared all document data.');
    } catch (error) {
        console.log(error);
        process.exit();
    }
}
const seedProductsDB = async () => {
    try {
        await Product.insertMany(seedData);
        console.log('Successfully inserted seed data.');
        process.exit();

    } catch (error) {
        console.log(error);
        process.exit();
    }
}

// clearProductsDB();
seedProductsDB();