require("dotenv").config();
// check request body session.loggedIn boolean
// this is set on auth-router on the login endpoint
module.exports = (req, res, next) => {
  const sesh = req.session;
  console.log("running auth middleware");
  if (sesh && sesh.loggedIn === true) {
    next();
  } else {
    if (process.env.AUTH_ENV === "testing") {
      next();
    } else {
      res.status(400).json({
        message: "You're not allowed in here!"
      });
    }
  }
};
