const express = require('express');
// const methodOverride = require('method-override');

const router = express.Router();
router.use(express.json());

// router.use(express.urlencoded({extended: true}));
// router.use(methodOverride('_method'));

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

const companyCntrl = require("../controllers/company")
const upload = require('../config/cloudinary');

// Routes
router.get("/add", companyCntrl.company_create_get);
router.post("/add", upload.single('company_images'), companyCntrl.company_create_post);
router.get("/index", companyCntrl.company_index_get);
router.get("/detail", companyCntrl.company_show_get);
router.delete("/delete", companyCntrl.company_delete_get);
router.get("/edit", companyCntrl.company_edit_get);
router.put("/update",upload.single('company_images'), companyCntrl.company_update_put);

router.get("/get", companyCntrl.company_by_cat_get);


module.exports = router;