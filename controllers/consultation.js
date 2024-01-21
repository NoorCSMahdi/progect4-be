// import from model
const {Consultation} = require('../models/Consultation');
// const {User} = require('../models/User');


// dayjs
const dayjs = require('dayjs');
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)




// API's 
// Create

// display the add form
exports.consultation_add_get = (req, res) => {
    // grab data from model
    Consultation.find()
    .then((consultations) => {
        res.json({consultations})
    })
    .catch((err) =>{
        console.log(err);
    }) 
    
}

// data gets added
exports.consultation_add_post = async (req, res) =>{  
    console.log(req.body);  
    // new variable
    let consultations = new Consultation(req.body);
//    save the new variable consultations
    consultations.save()
    // the one we catch is here 
    .then((consultations) => {
    // the one we send here which should match the one above
        res.json({consultations})
        
    })
    .catch((err) =>{
        console.log(err);
    }) 

}

// show index page
exports.consulation_index_get = (req, res) => {
    Consultation.find()
    // .populate('')

    .then((consultations) => {
        res.json({consultations})
    })
    .catch((err) => {
        console.log(err);
    })
}

// detail
exports.consultation_show_get = (req, res) => {
    console.log(req.params.id);
  
    Consultation.findById(req.params.id)
    .then((consultations) => {
        console.log(consultations)
        res.json({consultations, dayjs})
    })
    .catch((err) => {
        console.log(err);
    })

}


exports.consultation_delete_get = (req, res) => {
    console.log(req.query.id); 
    Consultation.findByIdAndDelete(req.query.id)
    .then((consultations) => {
        res.json({consultations})
    })
    .catch((err) => {
        console.log(err);
    });
}

exports.consulation_edit_get = (req,res) => {
    Consultation.findById(req.query.id)
    // .populate('')
    .then(consultations => {
        res.json({consultations})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.consultation_update_post = (req,res) => {
    console.log(req.body._id);

    Consultation.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then((consultations) => {
        res.json({consultations})
    })
    .catch((err) => {
        console.log(err);
    })
}
