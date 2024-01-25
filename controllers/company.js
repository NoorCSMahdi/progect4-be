// API's/ Functions

// const {User} = require("../models/User")
// const { Car } = require("../models/Car");
const { json } = require("express");
const { Company } = require("../models/Company");

// const dayjs = require('dayjs')
// var relativeTime = require('dayjs/plugin/relativeTime')
// dayjs.extend(relativeTime)

// CRUD Operations
// HTTP POST - Create - Post the data
// HTTP GET - Read - Retrieves the data
// HTTP PUT/POST - Update - Updates the data
// HTTP DELETE/GET/POST - Delete - Deletes the data

// Create Operation
exports.company_create_get = (req, res) => {
  res.render("company/add");
};

exports.company_create_post = (req, res) => {
  console.log("req.body", req.body);
  // const data = JSON.parse(req.body);
  // console.log("data", data)
  console.log("req.body", req.body.company_name);
  console.log("req.file", req.file);

  console.log("req.body", req.body.UserId);
  let company = new Company(req.body);
  company.User = req.body.UserId;

  // Handle file upload using multer
  if (req.file) {
    // Save the file path to the database
    company.company_images = req.file.path;
    console.log("Image path", "/uploads/" + req.file.filename);
  }
  // Save Company
  company
    .save()
    .then((company) => {
      // res.redirect("/company/index");
      res.json({ company });
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later!!");
    });
};
//Restful API
exports.company_index_get = (req, res) => {
  Company.find()
    .populate("Categories")
    // .populate('Car')
    .then((companys) => {
      // res.render("company/index", {companys, dayjs});
      res.json({ companys });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Restful API
exports.company_by_cat_get = (req, res) => {
  console.log("req.query.cat_id", req.query.cat_id);
  Company.find({ Categories: req.query.cat_id })
    .populate("Categories")
    // .populate('Car')
    .then((companys) => {
      console.log("companys", companys);
      // res.render("company/index", {companys, dayjs});
      res.json({ companys });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.company_show_get = (req, res) => {
  console.log(req.query.id);
  Company.findById(req.query.id)
    .populate("Categories")
    // .populate('Car')
    .then((company) => {
      console.log(company);
      res.json({ company });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.company_delete_get = (req, res) => {
  console.log(req.query.id);
  Company.findByIdAndDelete(req.query.id)
    .then((company) => {
      // Car.deleteMany({Company: req.query.id})
      res.json({ company });
      // res.redirect("/company/index");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.company_edit_get = (req, res) => {
  Company.findById(req.query.id)
    .populate("Categories")
    // .populate('Car')
    .then((company) => {
      // res.render("company/edit", {company});
      res.json({ company });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.company_update_put = (req, res) => {
  console.log(req.body._id);
  console.log(req.body);
  console.log("image", req.file);
  let data = req.body;
  if (req.file) data.company_images = req.file.path;
  else delete data.company_images;
  Company.findByIdAndUpdate(req.body._id, req.body, { new: true })
    // .populate('Car')
    .then((company) => {
      // res.redirect("/company/index");
      res.json({ company });
    })
    .catch((err) => {
      console.log(err);
    });
};
