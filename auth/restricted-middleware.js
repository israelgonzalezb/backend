require("dotenv").config();
// check request body session.loggedIn boolean
// this is set on auth-router on the login endpoint
module.exports = (req, res, next) => {
  //bypass restricted middleware check if AUTH_ENV is in testing mode.
  if (process.env.AUTH_ENV === "testing") {
    next();
    res.status(400).json({
      message: "supposedly we hit next()",
      env: process.env.AUTH_ENV
    });
  }
  const sesh = req.session;
  console.log("running auth middleware");
  sesh && sesh.loggedIn === true
    ? next()
    : res.status(400).json({
        message: "You're not allowed in here!",
        env: process.env.AUTH_ENV
      });
};
