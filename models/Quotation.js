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
  date: Date,
    consultation: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Consultation'
    },
// image: String,
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