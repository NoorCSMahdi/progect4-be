// dependencies
const mongoose = require('mongoose');
const multer = require('multer')

const consultationSchema = mongoose.Schema(
    {
      user_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
  
      consultation_description: {
        type: String,
        required: true
      },
  
      consultation_image: {
        type: String,
        default: "",
        required: true
      },

      consultation_land_area: {
        type: Number,
        required: true
      },
  
      consultation_land_dimensions: {
        type: Number,
        required: true
      },

      consultation_land_map: {
        type: String,
        default: "",
        required: true
      },

      consultation_land_autocad: {
        type: String,
        default: "",
      },

      
  
    },
    {
      timestamps: true,
    }
    
  );
  

  
  const Consultation = mongoose.model("Consultation", consultationSchema);
  module.exports = {Consultation};
  