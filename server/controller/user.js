const express = require("express");
const User = require("../model/user");
const router = express.Router();
const { upload } = require('../multer')
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
router.post('/create-user', upload.single('file'), async (req, res) => {
    const { name, email, password } = req.body
    const userEmail = await User.findOne({ email })
    if (userEmail) {
        return next(new ErrorHandler("User already exists", 400));
    }
    const filename= req.file.filename;
    const fileUrl= path.join(filename)
    const user = {
        name: name,
        email: email,
        password: password,
        avatar: fileUrl
      };
  
})

module.exports = router;