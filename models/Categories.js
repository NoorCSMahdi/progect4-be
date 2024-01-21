
const mongoose = require('mongoose');

// Category Schema
const categoriesSchema = mongoose.Schema({


  name: { 
    type: String 
  },


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









