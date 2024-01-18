// Load express module
const express = require('express');

// Initialize router functionality from express framework.
const router = express.Router();

router.use(express.json());

// Require courses controller
const consultationCtrl = require('../controller/consultation');


//Routs
router.get("/add", consultationCtrl.consultation_add_get);
router.post("/add",consultationCtrl.consultation_add_post);
router.get("/index", consultationCtrl.consulation_index_get);
router.get("/detail/:id", consultationCtrl.consultation_show_get);
router.delete("/delete", consultationCtrl.consultation_delete_get);
router.get("/edit", consultationCtrl.consulation_edit_get);
router.put("/update", consultationCtrl.consultation_update_post);




//Export
module.exports = router;
