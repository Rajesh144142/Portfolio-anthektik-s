const express = require('express');
const router = express.Router();
const AuthController = require('../Controller/AuthController'); // Check the file path and extension
// const { authtoken } = require('../Controller/authtoken');
const auth = require('../middleware/verifyToken');

// Define the routes
router.post('/signup', AuthController.signup);
router.post('/signin', AuthController.signin); // Renamed the signin controller function
// router.post('/authToken', authtoken); // Corrected route and middleware usage
router.delete('/logout', AuthController.logout); // Renamed the logout controller function


module.exports = router;
