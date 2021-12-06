const express = require('express');
const checkAuth = require('../middleware/checkAuth.middleware');
const userControllers = require('../controllers/user.controllers');

const router = express.Router();


//router.post('/signup', userControllers.userRegister);
//router.post('/login', userControllers.userLogin);
//router.get('/me', checkAuth, userControllers.getMe);
router.post('/add', userControllers.add);
router.get('/all', userControllers.getUsers);


module.exports = router