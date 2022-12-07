//Importing Service modelschema
const Service = require('../models/ServiceSchema')

//Importing transporter for sending mails
const transporter = require('../mail')


//Creating HomePageGet Function
const HomePageGet = async(req,res) => {

    const data = await Service.find({Name: req.params.id})
    res.json(data)

}

//Creating HomePagePost Function
const HomePagePost = async(req,res) => {

    if (req.body.Delivery == "Picked"){
        const data = await Service.find({Name: req.body.Name}).updateOne({Delivery: "Delivered"})
        res.json({msg: "Delivered and Updated in DB"})

    }else{
    res.json({msg: 'Please get your bike soon'})
    }
}

//Creating BookingOrder function to book a service
const BookingOrder = async(req,res) => {

    const data = await Service.create({
        Name: req.body.Name,
        Phone: req.body.Phone,
        GeneralService : req.body.GeneralService,
        OilChange: req.body.OilChange,
        BikeWash: req.body.BikeWash,
        DateOfNeeded: req.body.DateOfNeeded,
        Delivery: 'Pending'
    })

    //Creating a template that mail can use from and to address
    const mailOptions = {
        from : 'selvanithish2014@gmail.com',
        to : 'selvanithish2014@gmail.com',
        subject: 'New Service Order',
        text: `Name : ${req.body.Name} \nOrdered_Details : \n\tGeneralService : ${req.body.GeneralService}, \n\tOilChange : ${req.body.OilChange}, \n\tBike Wash : ${req.body.BikeWash},\n\tDateOfNeeded :  ${req.body.DateOfNeeded}`
    }

    //Using transporter we will send an email to on successfull booking
    const sending = transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log(err);
        }
        else{
            console.log('Mail Sent Successfully');
        }
    })

    res.json({msg: 'Successfully booked',
    order_details: data})
    
}




module.exports = {HomePageGet, HomePagePost, BookingOrder}