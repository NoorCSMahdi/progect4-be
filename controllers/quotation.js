//API's Function 

const {Quotation} = require("../models/Quotation");
const {Consultation} = require("../models/Consultation");
const mongoose = require("mongoose");

// CRUD operations
//HTTP POST- Create - Post the data 
// HTTP GET - Read - Retrieves the data
// HTTP PUT - update - update the data
//HTTP Delete/GET/POST - delete- delete the data


//Create the Operations 
exports.quotation_create_get = (req,res) =>{
    Consultation.find()
    .then((consultation)=>{
        //res.render("article/add", {authors});
        res.json({consultation});
    })
    .catch((err)=>{
        console.log(err);
    })
   
}

// exports.quotation_create_post = (req, res) => {
//     console.log(req.body);
//     let quotation = new Quotation(req.body);

//     // Save quotation
//     quotation.save()
//     .then((quotations)=>{
//         req.body.consultation.forEach(consultations  => {
//             Consultation.findById(consultations)
//             .then((oneConsultation)=>{
//                 oneConsultation.quotations.push(quotation);
//                 oneConsultation.save();
//             })
//             .catch(err =>{
//                 console.log(err)
//             })
            
//         });
//         //res.redirect("/quotation/index");
//         res.json({quotations})

//     })
//     .catch((err)=>{
//         console.log(err);
//         res.send("Please try again later !!")
//     })
// }


exports.quotation_create_post = (req, res) => {
    console.log(req.body);
    let quotation = new Quotation(req.body);

    // Save quotation
    quotation
        .save()
        .then((savedQuotation) => {
            if (req.body.consultation && Array.isArray(req.body.consultation)) {
                req.body.consultation.forEach((consultation) => {
                    Consultation.findById(consultation)
                        .then((oneConsultation) => {
                            if (oneConsultation) {
                                oneConsultation.quotations.push(savedQuotation);
                                oneConsultation.save().catch((err) => {
                                    console.log(err);
                                });
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                });
            }

            res.json({ quotation: savedQuotation });
        })
        .catch((err) => {
            console.log(err);
            res.send("Please try again later!");
        });
};



exports.quotation_index_get = (req, res) => {
    // const userId = req.body;  // Assuming the userId is passed as a parameter
    // console.log('userId',userId);
    // Quotation.find({ user: userId }) // Use the user property to filter by user id
    Quotation.find()     
    .populate('consultation')
        .then((quotations) => {
            res.json({ quotations });
        })
        .catch((err) => {
            console.log(err);
            res.json({ quotations: [] });
        });
};
//Restful API
exports.quotation_by_user_get = (req, res) => {
    console.log("req.query._id", req.query.user_id)
    console.log("req.query.userType", req.query.userType)
    let search=null;
    console.log("Req.user",req.user)

    if(req.user.userType==='CompanyOwner'){
        search={};

        // Get the company the user belongs to

        // Build search query where company matches the quotations
        // search={"company"=?????}

        
    }else if(req.user.userType==="Admin"){
        search= {};

    }else{
            // General User
            const objectId = req.user.id

            search={"user":objectId}
            console.log("USER USER USER",search)

    }
    Quotation.find( search).populate('user')
    // .populate('Car')
    .then((quotations) => { 
      console.log("quotations", quotations)
      // res.render("quotation/index", {quotations, dayjs});
      res.json({ quotations })
    })
    .catch((err) => {
      console.log(err);
    })
  
  }
exports.quotation_show_get = (req,res) =>{
console.log(req.query.id);
Quotation.findById(req.query.id)
.populate('consultation')
.then((quotation) => {
    //res.render("quotation/detail", {quotation})
    res.json({quotation})
})
.catch((err) => {
    console.log(err);
})
}


exports.quotation_update_post= (req, res) => {
console.log(req.body.id);
Quotation.findByIdAndUpdate(req.body._id, req.body , {new:true})
.then((quotations) => {
//res.redirect("/quotation/index");
res.json({quotations});
})
.catch((err) => {
console.log("Error is Cannot Updating " + err);
})
};

exports.quotation_edit_get = (req,res) =>{
Quotation.findById(req.query.id)
.populate('consultation')
.then((quotation)=>{
    
//res.render('quotation/edit',{quotation});
res.json({quotation});
})
.catch((err) => {
    console.log(err);
   
   
});
};


exports.quotation_delete_get = (req, res) => {
console.log(req.query.id);
Quotation.findByIdAndDelete(req.query.id)
.then((quotation) => {
    //res.redirect("/quotation/index");
    res.json({quotation})
})
.catch((err) => {
    console.log(err);
    res.send("Please try again later!!");
})
}