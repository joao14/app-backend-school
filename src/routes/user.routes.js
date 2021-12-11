const express = require('express');
const checkAuth = require('../middleware/checkAuth.middleware');
const userControllers = require('../controllers/user.controllers');
var cors = require('cors')
const router = express.Router();

var allowlist = ['http://localhost:3000/', 'http://example2.com']
var corsOptionsDelegate = function(req, callback) {
    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}

router.post('/login', cors(corsOptionsDelegate), userControllers.userLogin);
router.post('/add', cors(corsOptionsDelegate), checkAuth.validate, userControllers.add);
router.get('/all', cors(corsOptionsDelegate), checkAuth.validate, userControllers.getUsers);
router.put('/update', cors(corsOptionsDelegate), checkAuth.validate, userControllers.update);
router.delete('/delete/:id', cors(corsOptionsDelegate), checkAuth.validate, userControllers.remove);


module.exports = router