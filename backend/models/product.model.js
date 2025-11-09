import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
    {
        user: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const optionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    values: [{ type: String, required: true }],
});

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        images: [{ type: String, required: true }],
        description: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true, default: 0 },
        status: { type: String, required: true, default: 'In Stock' },
        options: [optionSchema],
        reviews: [reviewSchema],
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;