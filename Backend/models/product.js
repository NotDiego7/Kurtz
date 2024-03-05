const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: [true, 'Please enter a product name.'],
        trim: true,
        maxLenght: [100, 'Product name cannot exceed 100 characters.']
    },
    price: {
        type: Number,
        required: [true, 'Please enter a price.'],
        min: [0, 'Invalid price | Valid pricing is anything above $0.00'],
        max: [5000, 'For sales above $5,000 USD, please contact support.'],
    },
    description: {
        type: String,
        required: [true, 'A product description is required.'],
        trim: true,
        maxLenght: [750, 'Product description cannot exceed 750 characters.']
    },
    numOfReviews: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
    },
    reviews: [
        {
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
            }
        }
    ],
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select a product category.'],
        enum: {
            values: [
                'Electronics', // Note: We could add the following — values: {...}
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothing',
                'Footwear',
                'Beauty/Health',
                'Sports',
                'Outdoors',
                'Home Appliances',
            ],
            message: 'Please select a category from the list.'
        },
    },
    seller: {
        type: String,
        required: [true, 'Please specify the seller.'],
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
        max: 1000, 
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Product', productSchema);