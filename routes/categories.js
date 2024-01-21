// Load express module
const express = require('express');

// Initialize router functionality from express framework.
const router = express.Router();

router.use(express.json());

// Require courses controller
const categoriesCtrl = require('../controller/categories');


//Routs
router.get("/add", categoriesCtrl.categories_add_get);
router.post("/add",categoriesCtrl.categories_add_post);
router.get("/index", categoriesCtrl.categories_index_get);
router.get("/detail/:id", categoriesCtrl.categories_show_get);
router.delete("/delete", categoriesCtrl.categories_delete_get);
router.get("/edit", categoriesCtrl.categories_edit_get);
router.post("/update", categoriesCtrl.categories_update_post);




//Export
module.exports = router;
