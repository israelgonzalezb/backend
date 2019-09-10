const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const usersRouter = require("../users/users-router.js");
const userCategoriesRouter = require("../user-categories/user-categories-router.js");
const habitTrackingRouter = require("../habit-tracking/habit-tracking-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(logger);
server.use(cors());
server.use(errHandler);
server.use(
  session({
    name: "LifeGPA", // default is connect.sid
    secret: "this is a secret",
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: false // only set cookies over https. Server will not send back a cookie over http.
    }, // 1 day in milliseconds
    httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
    resave: false,
    saveUninitialized: false
  })
);

server.use("/api/users", usersRouter);
server.use("/api/user_categories", userCategoriesRouter);
server.use("/api/habit_tracking", habitTrackingRouter);

server.get("/", (req, res) => {
  res.send("Server up and running...");
});

//allows you to pass object of {status: ..., message: ...} to next, and the middleware sends out a json response with that data
function errHandler(err, req, res, next) {
  res.status(err.status).json({ message: err.message });
}

//logs out method and url of each request
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}

module.exports = server;
