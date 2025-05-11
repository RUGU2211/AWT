// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const employeesRoutes = require('./routes/employees');
const restaurantsRoutes = require('./routes/restaurants');
const propertiesRoutes = require('./routes/properties');

app.use(bodyParser.json());

app.use('/employees', employeesRoutes);
app.use('/restaurants', restaurantsRoutes);
app.use('/properties', propertiesRoutes);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
