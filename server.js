
// independence
//load express
const express = require('express');
// const expressLayouts = require("express-ejs-layouts");

// const fs = require('fs')
const multer = require('multer')
const cloudinary = require('cloudinary')

const upload = multer({ dest: 'images/' })

//require and initialize dotenv
require('dotenv').config();
//initialize express
const app = express()
app.use('/images', express.static('images'))
app.post('/api/images', upload.single('image'), (req, res) => {
  const imageName = req.file.filename
  const description = req.body.description

  // Save this data to a database probably

  console.log(description, imageName)
  res.send({description, imageName})
})


//port configuration
const port = process.env.PORT;

//database configuration
const db = require("./config/db");

app.use(express.static('public'))
// app.use('/uploads', express.static('public/uploads'))

//Import Routes
const userRouter = require("./routes/user");
const companyRouter = require("./routes/company");
const indexRouter =  require("./routes/index");
const quotationRouter= require("./routes/quotation");
const appointmentRouter=require("./routes/appointment");
const categoriesRouter=require("./routes/categories");
const consultationRouter=require("./routes/consultation")

// mount routes
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/company", companyRouter);
app.use("/quotation", quotationRouter);
app.use("/appointment", appointmentRouter);
app.use("/categories", categoriesRouter);
app.use("/consultations", consultationRouter);



// //Mount Routes
// app.use('/user', userRouter),
// app.use('/company', companyRouter)


app.listen(port, () => {
  console.log(`Concepr Build App is running on port ${port}`);
});

