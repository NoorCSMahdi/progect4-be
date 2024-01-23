const mongoose = require('mongoose');

const quotationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Company'
        },
  time: String,
  date: {
    type: Date,
    default: new Date(), // Sets the default value to the current date
    validate: {
      validator: function(date) {
        // Validates that the date is not in the past
        return date >= new Date();
      },
      alert: 'Date must be today or in the future.'
    }
  },
    consultation: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Consultation'
    },
image: String,
    description:String,
    location: String,
    notes: String,
    quantity: Number,
    price:Number,
    catagories: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Catagories'
    },
}, {
  timestamps: true
});

const Quotation = mongoose.model("Quotation", quotationSchema);

module.exports = { Quotation };