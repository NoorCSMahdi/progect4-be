
const {Categories} = require('../models/Categories');

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

    let category = new Categories(req.body);

    category.save()
    .then((categories) =>{
        res.json({categories})
    })
    .catch((err) =>{
        console.log(err);
        res.send("Please try again later!!!")
    })
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

    Categories.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then((categories) => {
        res.json({categories})
    })
    .catch((err) => {
        console.log(err);
    })
}

