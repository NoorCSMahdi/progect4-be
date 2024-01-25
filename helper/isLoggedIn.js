const jwt = require('jsonwebtoken');
require("dotenv").config();
const User = require("../models/Users")

module.exports = async (req, res, next) => {
    let token =""
    let authorizationToken = req.header("Authorization");
    console.log("authorizationToken", authorizationToken);

    if(authorizationToken){
        token = authorizationToken.replace("Bearer ", "");
        console.log("token", token);
    }

    if(!token){
        return res.status(401).json({"message": "You are not allowed to view this as this is hidden behind the wall of authentication"})
    }

    try{
        const decoded = jwt.verify(token, process.env.SECRET);

        req.user = decoded.user;
        if(req.user.hasOwnProperty("id")){
            const userdata = await User.findOne({
                "_id":req.user.id
            })

                
                req.user = {...JSON.parse(JSON.stringify(userdata)), ...req.user};
              // res.render("user/index", {users});
              //res.json({users})

        }
        next();
    }

    catch(err){
        return res.status(401).json({"message": "Your token is invalid"})
    }
}

