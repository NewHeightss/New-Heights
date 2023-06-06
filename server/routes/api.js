const express = require('express');
const router = express.Router();
const jobAppsController = require('../controllers/jobAppsController');
const cookieController = require('../controllers/cookieController');
const loginController = require('../controllers/loginController');

// login routes

router.get('/login', cookieController.checkUser, loginController.verifyUser, (req, res) => {
    res.status(200).send()
})

// job application routes
router.get('/applications/:user_id', jobAppsController.getApplications, (req, res) => {
    res.status(200).send('Successfully retrieved applications')
})

router.post('/application/:user_id', jobAppsController.addApplication, (req, res) => {
    res.status(200).send('Successfully added application')
})

router.delete('/application/:user_id', jobAppsController.deleteApplication, (req, res) => {
    res.status(200).send('Successfully deleted application')
})

router.update('/application/:user_id', jobAppsController.updateApplication, (req, res) => {
    res.status(200).send('Successfully updated application')
})

module.exports = router;