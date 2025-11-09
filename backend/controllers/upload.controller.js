import cloudinary from '../config/cloudinary.js';

// Helper function to upload from buffer
const uploadFromBuffer = (buffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: 'crafting-sign' }, // Optional: organize uploads in a folder
            (error, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            }
        );
        stream.end(buffer);
    });
};

// @desc    Upload an image
// @route   POST /api/upload
// @access  Private/Admin
const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const result = await uploadFromBuffer(req.file.buffer);

        res.status(201).json({
            message: 'Image uploaded successfully',
            secure_url: result.secure_url,
            public_id: result.public_id,
        });
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        res.status(500).json({ message: 'Server error during image upload', error: error.message });
    }
};

export { uploadImage };