import multer from "multer";

// Multer documentation available on its github
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) 
        // This will result in replacement of original file if other file with same name is uploaded
        // So best way is to generate a unique name for each file.
    }
})

export const upload = multer({
    storage,
})
