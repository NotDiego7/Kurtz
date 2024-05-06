// middleware/catchAsyncErrors.js
module.exports = (routeHandler) => (req, res, next) => {
    Promise.resolve(routeHandler(req, res, next)).catch(next);
};