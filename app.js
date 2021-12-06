require('dotenv').config();
var express = require('express');
var app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000

//Importer routes
var userRoutes = require('./routes/user.routes')


app.get('/', (req, res) => {
    res.send('App backend school 1.0');
})

app.get('/app/v1/materias', (req, res) => {
    res.send('App backend materias v1.0');
})

app.use('/app/v1/user/', userRoutes)



app.listen(PORT, function() {
    console.log('Server running on port 3000...');
})