const express = require('express');
const checkAuth = require('../middleware/checkAuth.middleware');
const profileControllers = require('../controllers/profile.controllers');

const router = express.Router();

router.post('/add', checkAuth.validate, profileControllers.add);
router.get('/all', checkAuth.validate, profileControllers.all);


module.exports = router