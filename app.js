require('dotenv').config()
var express = require('express');
var app = express();
app.use(express.json());

//Importer routes
var userRoutes = require('./routes/user.routes')


app.get('/', (req, res) => {
    res.send('App backend school 1.0');
})

app.use('/app/v1/user/', userRoutes)



app.listen(process.env.PORT || 3000, function() {
    console.log('Example app listening on port 3000');
})