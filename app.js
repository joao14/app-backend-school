require('dotenv').config();
var express = require('express');
var app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000

//Import routes 
var userRoutes = require('./src/routes/user.routes')


app.use('/app/v1/user/', userRoutes)



app.listen(PORT, function() {
    console.log('Server running on port 3000...');
})