// import jobsModel
const db = require('../model/jobsModel.js');

const jobAppsController = {};

// middleware for fetching job applications

jobAppsController.getApplications = async (req, res, next) => {
  try {
    const userId = req.params.user_id;
    const sqlGetApps = `SELECT * FROM job_applications WHERE user_id = ${userId}`;
    const result = await db.query(sqlGetApps);
    res.locals.apps = result.rows;
    return next();
} catch(err) {
    return next({
        log: 'error',
        message: { err: "Error in fetching applications"}
    })
  }
}

// middleware for posting new job application

jobAppsController.addApplication = async (req, res, next) => {
  try {
    const { company_name, position_name, city_name, notes_txt, status, application_type, listing_link, user_id } = req.body;
    const sqlAddApp = `INSERT INTO job_applications(company_name, position_name, city_name, notes_txt, status, application_type, listing_link, user_id) 
    VALUES('${company_name}', '${position_name}', '${city_name}', '${notes_txt}', '${status}', '${application_type}', '${listing_link}', '${user_id}')`;
    const result = await db.query(sqlAddApp);
    return next();
  } catch(err) {
    return next({
      log: 'error',
      message: { err: 'Error in posting application'}
    })
  }
}

// middleware for deleting job application

jobAppsController.deleteApplication = async (req, res, next) => {
  try {
    const applicationId = req.params.application_id;
    const sqlDeleteApp = `DELETE FROM job_applications WHERE _id = ${applicationId}`;
    db.query(sqlDeleteApp);
    return next()
  } catch(err) {
    return next({
      log: 'error',
      message: {err: 'Error in deleting application'}
    })
  }
}

// middleware for updating job application

jobAppsController.updateApplication = async (req, res, next) => {
  try {
    const { application_id, company_name, position_name, city_name, notes_txt, status, application_type, listing_link } = req.body;
    const sqlUpdateApp = `UPDATE job_applications SET company_name = '${company_name}', position_name = '${position_name}', city_name = '${city_name}', notes_txt = '${notes_txt}', status = '${status}', application_type = '${application_type}', listing_link = '${listing_link}' WHERE _id = '${application_id}'`;
    const result = await db.query(sqlUpdateApp);
    return next();
  } catch(err) {
    return next({
      log: 'error',
      message: { err: 'Error in updating application'}
    })
  }
}

module.exports = jobAppsController;

