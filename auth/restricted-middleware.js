require("dotenv").config();
// check request body session.loggedIn boolean
// this is set on auth-router on the login endpoint
module.exports = (req, res, next) => {
  const sesh = req.session;
  (sesh && sesh.loggedIn === true) || process.env.AUTH_ENV === "testing"
    ? next()
    : res.status(400).json({
        message: "You're not allowed in here!"
      });
};
