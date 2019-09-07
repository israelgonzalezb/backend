const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
//const secrets = require("../config/secrets.js");

const Users = require("../users/users-model.js");

router.post("/register", (req, res) => {
    console.log("on register route");
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.post('/login', (req, res, next) => {
    let { username, password } = req.body;
    
    Users.findBy(username)
      .first()
      .then(user => {
          
        if (user && bcrypt.compareSync(password, user.password)) {
          req.session.loggedIn = true;
          // do we need to keep this as the full user object in the session
          // or should we just keep the username in the session, for safer infosec pattern?
          req.session.user = user;
          res.status(200).json({message: `Welcome ${user.username}!`});
          next();
  
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  

  

module.exports = router;