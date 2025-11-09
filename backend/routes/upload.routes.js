import express from 'express';
const router = express.Router();
import { uploadImage } from '../controllers/upload.controller.js';
import upload from '../middleware/multer.js';
import { protect, admin } from '../middleware/auth.middleware.js';

router
    .route('/')
    .post(protect, admin, upload.single('image'), uploadImage);

export default router;