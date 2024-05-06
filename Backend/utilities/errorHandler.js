// utilities/errorHandler.js
class ErrorHandler extends Error {
    constructor(errorMessage, statusCode) {
        super(errorMessage); // Calls the Error constructor and sets message property
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler;