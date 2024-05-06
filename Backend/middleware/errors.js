// middleware/errors.js
const ErrorHandler = require('../utilities/errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    // Handle Mongoose object ID casting error
    if (err.name === 'CastError') {
        const errorMessage = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(errorMessage, 400);
    };

    // Handle Mongoose validation errors
    if (err.name === "ValidationError") {

        // Extract individual error messages from Mongoose validation errors -> []
        const validationErrorMessages = Object.values(err.errors).map(errorDetail => errorDetail.message);
        const errorMessage = validationErrorMessages.join(' | ');
        err = new ErrorHandler(errorMessage, 400);
    };

    let response;

    if (process.env.NODE_ENV === 'PRODUCTION') {
        response = {
            success: false,
            error: err.message || 'Internal Server Error'
        };
    } else if (process.env.NODE_ENV === 'DEVELOPMENT') {
        response = {
            success: false,
            error: err,
            errorMessage: err.message || 'Internal Server Error',
            errorStack: err.stack || ''
        };
    };
    res.status(err.statusCode).json({ response });
    };
