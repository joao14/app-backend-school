const express = require('express');
const checkAuth = require('../middleware/checkAuth.middleware');
const userControllers = require('../controllers/user.controllers');
const xzrouter = express.Router();

router.post('/login', userControllers.userLogin);
router.post('/add', checkAuth.validate, userControllers.add);
router.get('/all', checkAuth.validate, userControllers.getUsers);
router.put('/update', checkAuth.validate, userControllers.update);
router.delete('/delete/:id', checkAuth.validate, userControllers.remove);


module.exports = router