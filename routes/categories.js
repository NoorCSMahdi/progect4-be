// Load express module
const express = require('express');

// Initialize router functionality from express framework.
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}))
// Multer
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
  })
  // let upload = multer({ storage: storage })




// Require courses controller
const categoriesCtrl = require('../controllers/categories');
const upload = require('../config/cloudinary');


//Routs
router.get("/add", categoriesCtrl.categories_add_get);
router.post("/add", upload.single('categories_image'),categoriesCtrl.categories_add_post);
router.get("/index", categoriesCtrl.categories_index_get);
router.get("/detail/:id", categoriesCtrl.categories_show_get);
router.delete("/delete", categoriesCtrl.categories_delete_get);
router.get("/edit", categoriesCtrl.categories_edit_get);
router.post("/update",upload.single('categories_image'),categoriesCtrl.categories_update_post);




//Export
module.exports = router;
