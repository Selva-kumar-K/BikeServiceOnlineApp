////Importing User modelschema
const User = require('../models/model')

//Creating Register function
const Register = async(req,res) => {

    const data = {
        mail : req.body.mail,
        phone: req.body.phone
    }

    const rs = await User.find(data)
    if (rs == ''){
        
        try {
            const data = await User.create({mail : req.body.mail, phone: req.body.phone})
            console.log(data);
            res.json({msg : 'registered successfully'})
        } catch (error) {
            console.log(error);
            
        }
    }
    else{
        res.json({msg: 'you were a customer already please login'})
    }
}

module.exports = Register