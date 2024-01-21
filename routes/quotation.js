const express= require('express');
// const methodOverride= require('method-override')
const router= express.Router();
router.use(express.urlencoded({extended: true}));
router.use(express.json());
const QuotationCntrl= require("../controllers/quotation");
// const isLoggedIn = require('../helper/isLoggedIn');


//Routes
router.get("/add", QuotationCntrl.quotation_create_get);
router.post("/add", QuotationCntrl.quotation_create_post);
router.get("/index", QuotationCntrl.quotation_index_get);
router.get("/detail", QuotationCntrl.quotation_show_get);
router.delete("/delete", QuotationCntrl.quotation_delete_get);
router.get("/edit", QuotationCntrl.quotation_edit_get);
router.post("/update", QuotationCntrl.quotation_update_post);


module.exports = router;


