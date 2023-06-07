const express = require('express');
const router = express.Router();
const jobAppsController = require('../controllers/jobAppsController');
const cookieController = require('../controllers/cookieController');
const loginController = require('../controllers/loginController');

// login routes

router.get('/signup', loginController.createUser, (req, res) => {
    res.redirect('/');
})
router.get('/login', loginController.verifyUser, (req, res) => {
    res.redirect('/');
})

// job application routes
router.get('/application/:user_id', jobAppsController.getApplications, (req, res) => {
    res.status(200).json(res.locals.apps);
})

router.post('/application', jobAppsController.addApplication, (req, res) => {
    res.status(200).json(res.locals.newApp)
})

router.delete('/application/:application_id', jobAppsController.deleteApplication, (req, res) => {
    res.status(200).send('Successfully deleted application')
})

router.patch('/application', jobAppsController.updateApplication, (req, res) => {
    res.status(200).send('Successfully updated application')
})

module.exports = router;