const mongoose = require('mongoose');

const ProductDetailsSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    description: String,
    specifications: Object,
    reviews: [{ userId: String, rating: Number, comment: String }],
}, { timestamps: true });

const ProductDetails = mongoose.model('ProductDetails', ProductDetailsSchema);

module.exports = ProductDetails;