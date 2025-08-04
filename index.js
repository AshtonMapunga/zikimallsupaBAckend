const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');




const bookTruckRoutes = require('./routes/booktruck_routes');
const truckMantRoutes = require('./routes/truckmantainance_routes');
const truckSecRoutes = require('./routes/security_truck_routes');





const url = "mongodb+srv://sebatech2024:xcGRZSYqgiLbwbO0@escholar.f51th.mongodb.net/Zik";
const app = express();

mongoose.connect(url)
    .then(() => {
        console.log('The MongoDB has connected successfully');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());




app.use('/api/v1/booktruck_route', bookTruckRoutes);
app.use('/api/v1/truckment_route', truckMantRoutes);
app.use('/api/v1/trucksec_route', truckSecRoutes);







const Port = 4071;
app.listen(Port, () => {
    console.log("The server is running well at port:", Port);
});
