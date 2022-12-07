//Importing User modelschema
const User = require('../models/model')

//Creating a Login function 
const Login = async(req,res) => {

    const data = await User.findOne({
        mail : req.body.mail,
        phone: req.body.phone
    })


    if (data == null){
        res.json({msg: 'Please register you are not a user'})
    }  
    else{
        res.json({msg: "Logged successfully"})
    }

}

module.exports = Login