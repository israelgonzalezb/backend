
// check request body session.loggedIn boolean
// this is set on auth-router on the login endpoint
module.exports = (req, res, next) => {
    const sesh = req.session;
    // REMOVE THIS LINE BELOW AFTER TESTING
    next();
    // (sesh && (sesh.loggedIn === true))
    // ? next()
    // : res.status(400).json({message: "You're not allowed in here!"});
  }