import express from 'express';
const router = express.Router();
import {
    getAddresses,
    addAddress,
    deleteAddress,
} from '../controllers/user.controller.js';
import { protect } from '../middleware/auth.middleware.js';

// All routes here are protected
router.use(protect);

router.route('/addresses').get(getAddresses).post(addAddress);
router.route('/addresses/:id').delete(deleteAddress);

export default router;