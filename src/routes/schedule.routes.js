const express = require('express');
const checkAuth = require('../middleware/checkAuth.middleware');
const scheduleControllers = require('../controllers/schedule.controllers');
var cors = require('cors')
const router = express.Router();

var allowlist = ['http://localhost:3000/', 'http://example2.com']
var corsOptionsDelegate = function(req, callback) {
    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true }
    } else {
        corsOptions = { origin: false }
    }
    callback(null, corsOptions)
}

router.get('/get/schedule', cors(corsOptionsDelegate), checkAuth.validate, scheduleControllers.schedule);


module.exports = router