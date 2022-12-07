//Importing Service modelschema
const Service = require('../models/ServiceSchema')

//Importing User modelSchema
const User = require('../models/model')

//Importing transporter from mail.js to send an email
const transporter = require('../mail')

//Creating Admin function to check all booking
const AdminHomeAllBooking = async(req,res) => {

    const data = await Service.find({})
    res.json({order_details : data})
   
}

//Creating Admin function to check all register customers
const AdminAllCustomers = async(req,res) => {

    const data = await User.find({})
    res.json(data)
}

//Creating Function for getting Pending order in admin
const GetPendingOrder = async(req,res) => {

    const data = await Service.find({Delivery : req.params.id})
    res.json({pending_order_details : data})

}

//Creating Function for updating status 
const UpdatingDeliveryStatus = async(req,res) => {

    const data = await Service.find({Name: req.body.Name}).updateOne({Delivery: req.body.Delivery})
    const mailOptions = {
        from : 'selvanithish2014@gmail.com',
        to : 'selvanithish2014@gmail.com',
        subject: 'Delivery Ready',
        text: `Hello ${req.body.Name}, \n\t Your Bike is ready for Delivery \n\tKindly Pickup\n\tThank you for your valuable time!`
    }

    const sending = transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log(err);
        }
        else{
            console.log('Mail Sent Successfully');
        }
    })
    res.json({msg : 'Updated in DB as well Customer DB'})

}

//Creating Function for Deleting customers
const DeletingCustomer = async (req,res) => {
    const data = await Service.deleteOne({Name: req.params.id})
    res.json({msg: 'Deleted Successfully'})
}


module.exports = {AdminHomeAllBooking, AdminAllCustomers, GetPendingOrder, UpdatingDeliveryStatus, DeletingCustomer}