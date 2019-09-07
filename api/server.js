const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const usersRouter = require("../users/users-router.js");
const userCategoriesRouter = require("../user-categories/user-categories-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(logger);
server.use(cors());
 


server.get("/", (req, res)=>{
    res.send("Server up and running...");
})

server.use("/api/users", usersRouter);
server.use("/api/user_categories", userCategoriesRouter);

server.use(errHandler);

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