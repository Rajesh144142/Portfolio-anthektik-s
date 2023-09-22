const express = require('express');
const router = express.Router();
const AuthController = require('../Controller/AuthController'); // Check the file path and extension
const {authtoken} =require('../Controller/authtoken')
// Define the routes
router.post('/signup', AuthController.signup);
router.post('/signin', AuthController.signin); // Rename the signin controller function
router.post("/authToken", authtoken);

module.exports = router;
