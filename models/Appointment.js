const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref:'User'
  //   },
  //   company: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref:'Company'
  //       },
  time: String,
  date: Date,
    // consultation: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref:'Consultation'
    // },
// image: String,
    location: String, //location of meeting
    notes: String,
    // catagories: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref:'Catagories'
    // },
}, {
  timestamps: true
});

const Appointment= mongoose.model("Appointment", appointmentSchema);

module.exports = {Appointment};