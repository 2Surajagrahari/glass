import express from 'express';
const router = express.Router();
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/product.controller.js';
import { protect, admin } from '../middleware/auth.middleware.js';

// Public routes
router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

// Admin routes
router.route('/').post(protect, admin, createProduct);
router.route('/:id').put(protect, admin, updateProduct);
router.route('/:id').delete(protect, admin, deleteProduct);

export default router;