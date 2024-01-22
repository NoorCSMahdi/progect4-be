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
// to include these fields in the land area everytime we add

if (req.file) {
    // Save the file path to the database
    consultations.consultation_image = req.file.path;
    console.log("Image path", "/uploads/" + req.file.filename)
}
    // Consultation.consultation_land_area = {
    //     width: req.body.consultation_land_area_width,
    //     height: req.body.consultation_land_area_height
    // };
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
// changed from params to query
exports.consultation_show_get = (req, res) => {
    console.log(req.query.id);
  
    Consultation.findById(req.query.id)
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
    console.log("update");

    console.log(req.body._id);
    // trying to include these fields too
    // const { consultation_land_area_width, consultation_land_area_height, ...updateData } = req.body;
    // updateData.consultation_land_area = {
    //     width: consultation_land_area_width,
    //     height: consultation_land_area_height
    // };
    let data = req.body;
  if(req.file)
  data.consultation_image = req.file.path;
  else
  data.consultation_image = data.consultation_image

    Consultation.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then((consultations) => {
        console.log('update record');
        res.json({consultations})
    })
    .catch((err) => {
        console.log(err);
    })
}
