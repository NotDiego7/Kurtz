// config/database.js
const mongoose = require('mongoose');

// Connect to MongoDB
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log('Connected to MongoDB.');
    } catch (error) {
        console.error(error);
        process.exit();
    }
};

module.exports = connectToDatabase;