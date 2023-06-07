var passport = require('passport');
var GoogleStrategy = require('passport-google-oidc');

// import jobsModel
const db = require('../model/jobsModel.js');

const loginController = {};

loginController.verifyUser = async (req, res, next) => {

    try {
        console.log('verify user middleware ');
        passport.use(new GoogleStrategy({
            clientID: process.env['GOOGLE_CLIENT_ID'],
            clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
            callbackURL: '/oauth2/redirect/google',
            scope: [ 'profile' ]
          }, function verify(issuer, profile, cb) {
            console.log('profile: ', profile);
            db.query('SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?', [
              issuer,
              profile.id
            ], function(err, row) {
              if (err) { return cb(err); }
              if (!row) {
                db.run('INSERT INTO users (name) VALUES (?)', [
                  profile.displayName
                ], function(err) {
                  if (err) { return cb(err); }
          
                  var id = this.lastID;
                  db.run('INSERT INTO federated_credentials (user_id, provider, subject) VALUES (?, ?, ?)', [
                    id,
                    issuer,
                    profile.id
                  ], function(err) {
                    if (err) { return cb(err); }
                    var user = {
                      id: id,
                      name: profile.displayName
                    };
                    return cb(null, user);
                  });
                });
              } else {
                db.get('SELECT * FROM users WHERE id = ?', [ row.user_id ], function(err, row) {
                  if (err) { return cb(err); }
                  if (!row) { return cb(null, false); }
                  return cb(null, row);
                });
              }
            });
          }));
    } catch(err) {
        return next({
            log: 'error',
            message: { err: "Error verifying google user"}
        })
    }

}



module.exports = loginController