import multer from 'multer';
import path from 'path';

// Use memory storage to hold the file as a buffer
const storage = multer.memoryStorage();

// Check file type
function checkFileType(file, cb) {
    const filetypes = /jpe?g|png|webp|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error('Images only! (jpg, jpeg, png, webp, gif)'), false);
    }
}

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

export default upload;