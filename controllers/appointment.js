//API's Function 


const {Appointment} = require("../models/Appointment");


// CRUD operations
//HTTP POST- Create - Post the data 
// HTTP GET - Read - Retrieves the data
// HTTP PUT - update - update the data
//HTTP Delete/GET/POST - delete- delete the data

exports.appointment_create_get = (req, res) => {
    //res.render("appointment/add");
    res.json({appointment});
}

exports.appointment_create_post = (req, res) => {
    console.log('************************');
    console.log(req.body)
    console.log('************************');
    let appointment= new Appointment(req.body);


//save appointment
appointment.save()
.then((savedAppointment) => {
    if (req.body.consultation && Array.isArray(req.body.consultation)) {
        req.body.consultation.forEach((consultation) => {
            Consultation.findById(consultation)
                .then((oneConsultation) => {
                    if (oneConsultation) {
                        oneConsultation.appointments.push(savedAppointment);
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

    res.json({ appointment: savedAppointment });
})
.catch((err) => {
    console.log(err);
    res.send("Please try again later!!")
})
}

exports.appointment_index_get= (req,res) =>{
    const userId = req.query.id;  // Assuming the userId is passed as a parameter
    console.log('userId',userId);
    Appointment.find({ user: userId })
    .populate('consultation')
    .then((appointment) => {
       // res.render("appointment/index", {appointment});
       res.json({appointment});

    })
    .catch((err) => {
        console.log(err);
    })
}
exports.appointment_show_get = (req,res) =>{
    console.log(req.query.id);
    Appointment.findById(req.query.id) //.populate('records')
    .populate('consultation')
    .then((appointment) => {
        // res.render("appointment/detail", {appointment})
        res.json({appointment});
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.appointment_delete_get = (req,res) =>{
    console.log(req.query)
    Appointment.findByIdAndDelete(req.query.id)
    .then((appointment) => {
        //res.redirect("/appointment/index");
        res.json({appointment})
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.appointment_edit_get = (req,res) =>{
    Appointment.findById(req.query.id)
    .populate('consultation')
    .then((appointment) => {
        //res.render("appointment/edit", {appointment});
        res.json({appointment});
    })
    .catch((err) => {
        console.log(err);
    })
}

exports.appointment_update_post= (req,res) =>{
    console.log(req.body._id)
    Appointment.findByIdAndUpdate(req.body._id, req.body ,{new:true})
    .then((appointments) => {

       //res.redirect("/appointment/index");
        res.json({appointments});
    })
    .catch((err) => {
        console.log(err);
    })
}