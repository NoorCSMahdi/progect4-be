
const {Categories} = require('../models/Categories');
const uploadCloudinary = require('../config/cloudinary');
const dayjs = require('dayjs');
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

// RESTFUL API's

exports.categories_add_get = (req, res) => {

    Categories.find()
    .then((categories) => {
        res.json({categories})
    })
    .catch((err) =>{
        console.log(err);
    }) 
    
}

exports.categories_add_post = async (req, res) => {  
    console.log("req.body");  

    console.log(req.body);
    let categories = new Categories(req.body);
    if (req.file) {
        // Save the file path to the database
        categories.categories_image = req.file.path;
        console.log("Image path", "/uploads/" + req.file.filename)
    }
      // Save Categories
      categories.save()
      .then((categories) => {
        // res.redirect("/categories/index");
        res.json({categories})
      })
      .catch((err) => {
        console.log(err);
        res.send("Please try again later!!")
      })
    // const data = JSON.parse(req.body.Categories)
    /*let newlyAddedCategory = {
        name: req.body.name,
        image: req.file.filename,
    };
    let category = new Categories(newlyAddedCategory);
    try{
        if(req.file){
            await uploadCloudinary.upload_single(req.file.path)
        }
    }catch(error){
        console.log(err,err.message)
    }

    category.save()
    .then((categories) =>{
        res.json({categories})
    })
    .catch((err) =>{
        console.log(err);
        res.send("Please try again later!!!")
    })*/
}

exports.categories_index_get = (req, res) => {
    Categories.find()
    .then((categories) => {
        res.json({categories})
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.categories_show_get = (req, res) => {
    console.log(req.query.id);
  
    Categories.findById(req.query.id)
    .then((categories) => {
        console.log(categories)
        res.json({categories, dayjs})
    })
    .catch((err) => {
        console.log(err);
    })

}

exports.categories_delete_get = (req, res) => {
    console.log(req.query.id);  // for debugging purpose
    Categories.findByIdAndDelete(req.query.id)
    .then((categories) => {
        res.json({categories})
    })
    .catch((err) => {
        console.log(err);
    });
}

exports.categories_edit_get = (req,res) => {
    Categories.findById(req.query.id)
    .then(categories => {
        res.json({categories})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.categories_update_post = (req,res) => {
  console.log(req.body._id);
  console.log(req.body);
  let data = req.body;
  // Save the file path to the database if a file is uploaded
  if(req.file)
  data.categories_image = req.file.path;
  else
  data.categories_image = data.categories_image
  Categories.findByIdAndUpdate(req.body._id, req.body, {new:true})
  // .populate('Car')
  .then((categories) => {
    // res.redirect("/categories/index");
    res.json({categories})
  })
  .catch(err => {
    console.log(err);
  })
   /* console.log(req.body._id);
    const data = JSON.parse(req.body.categories);
    console.log("id backend category", data._id);
    data.image = req.file.filename;
    console.log("the daTA BACKEND", data);
    Categories.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then((categories) => {
        res.json({categories})
    })
    .catch((err) => {
        console.log(err);
    })*/
}

