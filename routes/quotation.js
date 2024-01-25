const express= require('express');
// const methodOverride= require('method-override')
const router= express.Router();
router.use(express.urlencoded({extended: true}));
router.use(express.json());
const QuotationCntrl= require("../controllers/quotation");
const isLoggedIn = require('../helper/isLoggedIn');


//Routes
router.get("/add", isLoggedIn, QuotationCntrl.quotation_create_get);
router.post("/add", isLoggedIn,QuotationCntrl.quotation_create_post);
router.get("/index", isLoggedIn,QuotationCntrl.quotation_index_get);
router.get("/detail", isLoggedIn,QuotationCntrl.quotation_show_get);
router.get("/delete", isLoggedIn,QuotationCntrl.quotation_delete_get);
router.get("/edit", QuotationCntrl.quotation_edit_get);
router.post("/update",QuotationCntrl.quotation_update_post);
router.get("/get",QuotationCntrl.quotation_by_user_get);

module.exports = router;


