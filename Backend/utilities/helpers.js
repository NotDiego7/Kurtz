exports.isProductIdProvided = (productId) => {
    if (!productId) {
        return res.status(400).json({
            success: false,
            message: 'No product ID was provided.'
        })
    };
}