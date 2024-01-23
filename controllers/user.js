// API's/ Functions
const User = require("../models/Users")
const { json } = require("express");
const bcrypt = require('bcryptjs');
const salt = 10;


// Create Operation
exports.user_create_get = (req, res) => {
  res.render("user/add");
}
//RESTFUL API
exports.user_create_post = (req, res) => {
  let user = new User(req.body);

  // Handle file upload using multer
  if (req.file) {
    // Save the file path to the database
    user.user_image = req.file.path;
    console.log("Image path", "/uploads/" + req.file.filename)
}

 //Declaring the Hash method for the password
 let hash = bcrypt.hashSync(req.body.user_password, salt);
 console.log(hash);

 //Making the password Hash before saving the User Information
 user.user_password = hash;

  // Save User
  user.save()
  .then((user) => {
    // res.redirect("/user/index");
    res.json({user})
  })
  .catch((err) => {
    console.log(err);
    res.send("Please try again later!!")
  })
}
//RESTFUL API
exports.user_index_get = (req, res) => {
  User.find()
  .then((users) => {
    // res.render("user/index", {users});
    res.json({users})
  })
  .catch((err) => {
    console.log(err);
  })

}

exports.user_show_get = (req, res) => {
  console.log("id:",req.query.id);
  User.findById(req.query.id)
  .then((user) => {
    console.log(user);
    // res.render("user/detail", {user})
    res.json({user});
  })
  .catch((err) => {
    console.log(err);
  })
}
//RESTFUL API
exports.user_delete_get = (req, res) => {
  console.log(req.query.id);
  User.findByIdAndDelete(req.query.id)
  .then((user) => {
    // res.redirect("/user/index");
    res.json({user});
  })
  .catch((err) => {
    console.log(err);
  })
}
//RESTFUL API
exports.user_edit_get = (req, res) => {
  User.findById(req.query.id)
  .then((user) => {
    // res.render("user/edit", {user});
    res.json({user})
  })
  .catch(err => {
    console.log(err);
  })
}
// RESTful API
exports.user_update_put = async (req, res) => {
  try {
    console.log(req.body);
    if (req.file) {
      req.body.user_image = req.file.path ;
    }

    if (req.body.user_password) {
      const hashedPassword = await bcrypt.hash(req.body.user_password, 10);

      req.body.user_password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(req.body._id, req.body, { new: true });

    res.json({ user: updatedUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};