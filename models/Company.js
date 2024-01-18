
const companySchema = mongoose.Schema({
  company_name: String,
  company_description: String,
  company_phoneNumber: Number,
  company_emailAddress: String,
  company_rate: Number,
  company_CAT: String,
  company_images: String,
  company_latitude: String,
  company_longitude: String,
  
  working_hours: {
    type: Map,
    of: {
      start_time: String,
      end_time: String
    }
  },
  
  working_days: [String], // Array to store the working days
  
  User: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  
  Categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories'
  }]
}, {
  timestamps: true // means createdAt and updatedAt
});

// Creating Model
const Company = mongoose.model("Company", companySchema);

// Export
module.exports = { Company };

