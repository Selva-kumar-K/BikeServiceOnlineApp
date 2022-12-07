//Importing nodemailer for sending mails
const nodemailer = require('nodemailer')

//Creating a transporter for accessing gmail
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth : {
        user: 'selvanithish2014@gmail.com',
        pass: 'glncrjcmpxmkehdm'
    }
})

module.exports = transporter
