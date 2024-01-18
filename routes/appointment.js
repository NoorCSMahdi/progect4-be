const express= require('express');
// const methodOverride= require('method-override')
const router= express.Router();
router.use(express.urlencoded({extended: true}));
router.use(express.json());
const AppointmentCntrl= require("../controller/appointment");
// const isLoggedIn = require('../helper/isLoggedIn');


//Routes
router.get("/add", AppointmentCntrl.appointment_create_get);
router.post("/add", AppointmentCntrl.appointment_create_post);
router.get("/index", AppointmentCntrl.appointment_index_get);
router.get("/detail", AppointmentCntrl.appointment_show_get);
router.get("/delete", AppointmentCntrl.appointment_delete_get);
router.get("/edit", AppointmentCntrl.appointment_edit_get);
router.post("/update", AppointmentCntrl.appointment_update_post);


module.exports = router;


