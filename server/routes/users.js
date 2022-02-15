var express = require("express");
var router = express.Router();
var models = require("../models"); //<--- Add models
var authService = require("../services/auth"); //<--- Add authentication service
var cors = require("cors");

router.use(cors());
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

// this route get's called when user logs in
router.post("/login", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
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
          res.json(token);
        } else {
          console.log("wrong password");
          res.send("wrong password");
        }
      }
    });
});

// this route get's called when profile page get's rendered
router.get("/profile/:token", function (req, res, next) {
  let token = req.params.token;
  if (token) {
    authService.verifyUser(token).then((user) => {
      if (user) {
        models.users
          .findAll({
            where: {
              UserId: user.UserId,
            },
          })
          .then((result) => {
            console.log(result);

            res.json(result);
          });
      } else {
        res.status(401);
        res.sent("invalid authentication token");
      }
    });
  } else {
    res.status(401);
    res.sent("must be logged in");
  }
});

router.get("/logout", function (req, res, next) {
  res.cookie("jwt", "", { expires: new Date(0) });
});

module.exports = router;
