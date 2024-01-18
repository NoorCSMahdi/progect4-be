const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
  company_name: String,
  company_description: String,
  company_image: String,
  company_rate: Number,
  company_latitude: String,
  company_longtude: String,
  company_phoneNumber: Number,
  company_emailAddress: String,
  working_days: [String], // Array to store the working days
  User: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  Car: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car'
  }]
}, {
  timestamps: true // means createdAt and updatedAt
});

// Creating Model
const Exhibition = mongoose.model("Exhibition", companySchema);

// Export
module.exports = { Exhibition };