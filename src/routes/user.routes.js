const express = require('express');
const checkAuth = require('../middleware/checkAuth.middleware');
const userControllers = require('../controllers/user.controllers');

const router = express.Router();

//router.post('/signup', userControllers.userRegister);
//router.post('/login', userControllers.userLogin);
//router.get('/me', checkAuth, userControllers.getMe);

router.get('/login', userControllers.userLogin);
router.post('/add', checkAuth.validate, userControllers.add);
router.get('/all', checkAuth.validate, userControllers.getUsers);


module.exports = router