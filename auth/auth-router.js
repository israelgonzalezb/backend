const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");

router.post("/register", async (req, res) => {
    console.log("on register route");
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    try{
      const newUser = await Users.add(user);
      res.status(201).json(newUser);
    } catch(err) {
      res.status(500).json(err);
    }
});

router.post('/login', async (req, res, next) => {
    let { username, password } = req.body;
    
    
    try {
      const user = await Users.findBy(username).first();
      //const userExists = Object.keys(user).length;
      //console.log(`Pass is correct? ${correctPassword}`);
      if (user && bcrypt.compareSync(password, user.password)){
        req.session.loggedIn = true;
        // do we need full user object in session?
        // or should we just keep the username in the session, for safer infosec pattern?
        req.session.user = user;
        res.status(200).json({message: `Welcome ${user.username}!`});
        next();
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    } catch(err) {
      console.log(err);
      res.status(500).json(err);
    };
    // Users.findBy(username)
    //   .first()
    //   .then(user => {
          
    //     if (user && bcrypt.compareSync(password, user.password)) {
    //       req.session.loggedIn = true;
    //       // do we need to keep this as the full user object in the session
    //       // or should we just keep the username in the session, for safer infosec pattern?
    //       req.session.user = user;
    //       res.status(200).json({message: `Welcome ${user.username}!`});
    //       next();
  
    //     } else {
    //       res.status(401).json({ message: 'Invalid Credentials' });
    //     }
    //   })
    //   .catch(error => {
    //     res.status(500).json(error);
    //   });
  });
  

  

module.exports = router;