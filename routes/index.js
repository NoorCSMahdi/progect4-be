//load express module
const express = require("express");

//initialize only the Router functionality from express framework
const router = express.Router();

//Require our index controller
const indexCntrl = require("../controller/index");

// Check if the user is logged in
// const {checkType} = require("../config/checkType");

// router.use(express.urlencoded({ extended: true }));

// //Routes
// router.get("/", checkType(1), indexCntrl.index);
router.get("/", indexCntrl.index);

module.exports = router;