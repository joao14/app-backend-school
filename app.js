require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');
app.use(express.json());
const PORT = process.env.PORT || 3000

app.use(cors())

//Import routes 
var userRoutes = require('./src/routes/user.routes')
var courseRoutes = require('./src/routes/course.routes')
var profileRoutes = require('./src/routes/profile.routes')
var scheduleRoutes = require('./src/routes/schedule.routes')

app.use('/app/v1/user/', userRoutes)
app.use('/app/v1/course/', courseRoutes)
app.use('/app/v1/profile/', profileRoutes)
app.use('/app/v1/schedule/', scheduleRoutes)

app.listen(PORT, function() {
    console.log('Server running on port 3000');
})