// const db = require('../model/jobsModel.js');
// const bcrypt = require('bcrypt');

// const loginController = {};

// // middleware for creating a user

// loginController.createUser = async (req, res, next) => {
    
//     const { username, password } = req.body;
    
//     try {
//         // check to make sure username does not already exist
//         const sqlCheckUsername = `SELECT * FROM users WHERE username = ${username}`;
//         const usernameExists = await db.query(sqlCheckUsername);
        
//         if (usernameExists.length > 0) {
//           return res.status(400).json({ error: 'Username already taken' });
//         }

//         const hash = await bcrypt.hash(password, 10);
//         const sqlAddUser = `INSERT INTO users (username, password) VALUES ('${username}', '${hash}')`;
//         const results = await db.query(sqlAddUser);
//         console.log('results', results)
//         return next();
//     } catch(err) {
//         return next({
//           log: 'error',
//           message: { err: "Error in creating user"}
//           })
//       }
//   }


// // middleware for verifying a user

// loginController.verifyUser = async (req, res, next) => {
//     const { username, password } = req.body;

//     try {
//       const sqlVerifyUser = `SELECT * FROM users WHERE username = ${username}`;
//       const results = await db.query(sqlVerifyUser, values);

//       if (results.length === 0) {
//         return res.status(401).json({ error: 'Invalid credentials' });
//       }
  
//       const user = results[0];
  
//       const isValid = await bcrypt.compare(password, user.password);
  
//       if (!isValid) {
//         return res.status(401).json({ error: 'Invalid credentials' });
//       }
  
//       req.userId = user.id;
//       return next();
//     } catch(err) {
//         return next({
//           log: 'error',
//           message: { err: "Error in verifying user"}
//           })
//       }
//   };


// module.exports = loginController;