const express = require('express');
const checkAuth = require('../middleware/checkAuth.middleware');
const courseControllers = require('../controllers/course.controllers');

const router = express.Router();

router.post('/add', checkAuth.validate, courseControllers.add);
router.post('/delete', checkAuth.validate, courseControllers.add);
router.post('/modify', checkAuth.validate, courseControllers.add);
router.get('/all', checkAuth.validate, courseControllers.all);


module.exports = router