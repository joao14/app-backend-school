var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello World Alex Merino v1.4');
})

app.get('/students', (req, res) => {
    res.json({
        message: "Successfull",
        data: {
            name: "Alexander Merino",
            age: "32",
            email: "alexmerino67@gmail.com",
            phone: "0995308851"
        }
    })
})

app.listen(process.env.PORT || 3000, function() {
    console.log('Example app listening on port 3000');
})