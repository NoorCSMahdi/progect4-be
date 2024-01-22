// Load express module
const express = require('express');

// Initialize router functionality from express framework.
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

// for image upload
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
  })


// Require courses controller
const consultationCtrl = require('../controllers/consultation');
// for cloudinary use
const upload = require('../config/cloudinary');

//Routs
router.get("/add", consultationCtrl.consultation_add_get);
// adding upload
router.post("/add",upload.single('consultation_image'),consultationCtrl.consultation_add_post);
router.get("/index", consultationCtrl.consulation_index_get);
// removed /:id
router.get("/detail", consultationCtrl.consultation_show_get);
router.delete("/delete", consultationCtrl.consultation_delete_get);
router.get("/edit", consultationCtrl.consulation_edit_get);
router.put("/update", upload.single('consultation_image'),consultationCtrl.consultation_update_post);




//Export
module.exports = router;
