import express from 'express';
const router = express.Router();
import {
    createOrder,
    getMyOrders,
    getOrders,
    updateOrderStatus,
    getOrderById,
} from '../controllers/order.controller.js';
import { protect, admin } from '../middleware/auth.middleware.js';

// Routes
router.route('/').post(protect, createOrder).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, admin, getOrderById);
router.route('/:id/status').put(protect, admin, updateOrderStatus);

export default router;