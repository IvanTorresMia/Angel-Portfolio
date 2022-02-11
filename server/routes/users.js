var express = require("express");
var router = express.Router();
var models = require("../models"); //<--- Add models
var authService = require("../services/auth"); //<--- Add authentication service

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", (req, res, next) => {
  models.users
    .findOrCreate({
      where: {
        Email: req.body.email,
      },
      defaults: {
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Email: req.body.email,
        Password: authService.hashPassword(req.body.password),
        admin: req.body.admin,
      },
    })
    .spread((result, created) => {
      if (created) {
        res.send("User successfully created");
      } else {
        res.send("This user already exists");
      }
    });
});

router.post("/login", (req, res, next) => {
  models.users
    .findOne({
      where: {
        Email: req.body.email,
      },
    })
    .then((user) => {
      if (!user) {
        console.log("user not found");
        return res.status(401).json({
          message: "login failed",
        });
      } else {
        let passwordMatch = authService.comparePasswords(
          req.body.password,
          user.Password
        );

        if (passwordMatch) {
          let token = authService.signUser(user);
          res.cookie("jwt", token);
        } else {
          console.log("wrong password");
          res.send("wrong password");
        }
      }
    });
});


router.get("/profile", () => {
  
})



module.exports = router;
