const ErrorHandler = require('../utilities/errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    let response;

    if (process.env.NODE_ENV === 'PRODUCTION') {
        response = {
            success: false,
            errorMessage: err.message || 'Internal Server Error'
        };
    } else if (process.env.NODE_ENV === 'DEVELOPMENT') {
        response = {
            success: false,
            errorMessage: err.message || 'Internal Server Error',
            errorStack: err.stack || ''
        };
    }

    res.status(err.statusCode).json({ response });
}
