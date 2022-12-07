//importing express module
const express = require('express')

//importing modules from Register.js
const Register = require('./Register')

//importing modules from Login.js
const Login = require('./Login')

//importing modules from HomePage.js
const {HomePageGet, HomePagePost, BookingOrder}  = require('./HomePage')

//importing modules from Admin.js
const {AdminHomeAllBooking, AdminAllCustomers, GetPendingOrder, UpdatingDeliveryStatus, DeletingCustomer} = require('./Admin')

//importing User modelSchema
const User = require('../models/model')

//importing Service modelSchema
const Service = require('../models/ServiceSchema')

//importing transporter from mail.js to send a mail
const transporter = require('../mail')

//Calling router function to create a router
const router = express.Router()



router

    //POST method for Register Page 
    .post('/',Register)

    //POST method for Login Page
    .post('/login', Login) 

    //GET method for getting UserDetails
    .get('/HomePage/:id',HomePageGet) 

    //POST method for getting bike delivered
    .post('/HomePage',HomePagePost)
    
    //POST method for booking order
    .post('/HomePage/book', BookingOrder)

    //GET method for Admin to view all booking
    .get('/Admin', AdminHomeAllBooking)

    //GET method for Viewing All registered customers
    .get('/Admin/Customers', AdminAllCustomers)

    //GET method for getting Pending Orders
    .get('/Admin/:id', GetPendingOrder)

    //PATCH method for updating delivery status from pending to ready delivery
    .patch('/Admin', UpdatingDeliveryStatus)

    //DELETE method for deleting customers
    .delete('/Admin/:id', DeletingCustomer)


module.exports = router
