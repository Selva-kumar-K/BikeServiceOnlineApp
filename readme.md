Welcome to Bike Service online booking App


I'm not familiar with frontend currently i'm in learning process soon i'll get it:)
Done by Selvakumar (API Alone)
----------------------------------------------------------------------------------

To register your account
go to path('http://localhost:5000') via POST method

//Add body in the postman like 
{   
    "mail" : 'yourmail@gmail.com',
    "phone" : 9000080000
  
}
Note : mail is String, phone is Number type

To Login your account
go to path('http://localhost:5000/login') via POST method

//Add body in the postman like 
{   
    "mail" : 'yourmail@gmail.com',
    "phone" : 9000080000
  
}

To Book your order
go to path('http://localhost:5000/HomePage/book') via POST method

//Add body in the postman like 
{
    "Name": "your name",
    "Phone": 8888822222,
    "GeneralService": true,
    "OilChange": true,
    "BikeWash": true,
    "DateOfNeeded": "dd/mm/yyyy"
}

Note: Here Name and DateOfNeeded is String type, Phone is number type, remaining are boolean type.

To Get your all order
go to path('http://localhost:5000/HomePage/:id') via GET method

Note: Here id is your name you should provide your name . 
Exg :http://localhost:5000/HomePage/Aravind --> if you hit it will give your all orders
{
    "Name": "Aravind",
    "Phone": 8823412344,
    "GeneralService": true,
    "OilChange": false,
    "BikeWash": true,
    "DateOfNeeded": "24/12/2022",
    "Delivery": "Delivered"
}

To get your bike delivered
go to path('http://localhost:5000/HomePage') via  POST method

//Add body in the postman like this

{
    "Name" : "your name",
    "Delivery": "Picked"
}

Note: you should add the name and delivery = Picked then it will change in your status "ready for delivery" to "delivered"

Before:
{
    "Name": "Aravind",
    "Phone": 8823412344,
    "GeneralService": true,
    "OilChange": false,
    "BikeWash": true,
    "DateOfNeeded": "24/12/2022",
    "Delivery": "Ready for delivery"
}

After:

{
    "Name": "Aravind",
    "Phone": 8823412344,
    "GeneralService": true,
    "OilChange": false,
    "BikeWash": true,
    "DateOfNeeded": "24/12/2022",
    "Delivery": "Delivered"
}

To View Admin panel
go to path('http://localhost:5000/Admin') via GET  method

Note: It will shows all the booking customers

To view All registered Customers
go to path('http://localhost:5000/Admin/Customers') via GET method

Note: It will shows the all registered customers including non booking customers

To view the Pending Customers
go to path('http://localhost:5000/Admin/:id') via GET method

Note: Here id is Pending word exg : http://localhost:5000/Admin/Pending' --> it will fetch the data with all Pending customers

To update the status of pending
go to path('http://localhost:5000/Admin') via PATCH method

//Add the body in the postman like this

{
    "Name" : "username",
    "Delivery": "Ready for delivery"
}

exg:
Before: 
{
    "Name": "Aravnid",
    "Phone": 8823412344,
    "GeneralService": true,
    "OilChange": false,
    "BikeWash": true,
    "DateOfNeeded": "24/12/2022",
    "Delivery": "Pending",
}

After:
{
    "Name": "Aravnid",
    "Phone": 8823412344,
    "GeneralService": true,
    "OilChange": false,
    "BikeWash": true,
    "DateOfNeeded": "24/12/2022",
    "Delivery": "Ready for delivery",
}


To view the Delete Customers
go to path('http://localhost:5000/Admin/:id') via DELETE method

Note: Here id is the name of the customer


