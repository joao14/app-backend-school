var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello World Alex Merino');
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000');
})