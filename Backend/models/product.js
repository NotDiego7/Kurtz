const mongoose = require('mongoose');

function capitalizeFirstLetter(value) {
    // Capitalize the first letter of each word
    // return value.toLowerCase().replace(/\b(\w)/g, char => char.toUpperCase());
  
    // Capitalize only the first letter of the first word
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
  

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Add more fields as needed
});

    module.exports = mongoose.model('Product', productSchema);