//importing exress module
const express = require('express') 

//to set the environmental variable in our path
const dotenv = require('dotenv').config() 

//importing connectDB to connect db
const connectDB = require('./db/db')

//importing routes
const router = require('./routes/routes')

//it will access the .env file and search for PORT variable
const PORT = process.env.PORT 

//calling an express function
const app = express() 

//To parse the incoming request into json
app.use(express.json())


//Middleware using router as a path
app.use(router)

//Connect Server only When DB is Connected
const start = async() => {
    try {
        await connectDB(process.env.DB_URL)
        console.log('DB Connected');
        app.listen(PORT, () => console.log(`Server is listening on the port no : ${PORT}`))

        
    } catch (error) {
        console.log(error);
        
    }
}

start()


