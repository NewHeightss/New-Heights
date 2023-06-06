// import jobsModel
const db = require('../model/jobsModel.js');

const jobAppsController = {};

// middleware for fetching job applications

jobAppsController.getApplications = async (req, res, next) => {
  try {
    const userId = req.params.user_id
    const sqlGetApps = `SELECT * FROM job_applications WHERE user_id = ${userId}`;
    const result = await db.query(sqlGetApps);
    res.locals.apps = result.rows[0]
    return next();
} catch(err) {
    return next({
        log: 'error',
        message: { err}
    })
  }
}



// middleware for posting new job application

// middleware for deleting job application

// middleware for updating job application