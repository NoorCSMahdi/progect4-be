
const mongoose = require('mongoose');
const multer = require('multer')
// Category Schema
const categoriesSchema = mongoose.Schema({

  type:String,

  categories_image: {
    type: String,
    default: "",
  },

}, 

{
  timestamps: true
})
// auction Model
const Categories = mongoose.model("Categories", categoriesSchema);
// Export
module.exports = { Categories };









