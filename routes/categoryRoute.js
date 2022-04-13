const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController");
const firebase = require("../middleware/firebase");
const multer = require('multer');
var ImageName="";
var storage = multer.diskStorage({
    destination:'public/images',
    filename:function(request,file,cb){
      ImageName=Date.now()+"-"+file.originalname;
      cb(null ,ImageName);
      
    }
});
var upload=multer({storage: storage});

router.post("/add",upload.single("image"),firebase.fileUpload,categoryController.add);

router.get("/view",categoryController.view);

router.post("/edit",upload.single("image"),categoryController.edit);

router.delete("/delete",categoryController.delete);

module.exports = router;