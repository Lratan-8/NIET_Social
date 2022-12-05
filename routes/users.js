//we called express
const express = require('express');
//we called express router module
const router = express.Router();
//we accessed the controller known as users_controller in this file
const usersController = require('../controllers/users_controller');
//we assigned route to the respective controller that we just accessed
router.get('/profile', usersController.profile);
//we exported this module in index.js
module.exports = router;
