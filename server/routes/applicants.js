var express = require("express");
var router = express.Router();
var models = require("../models");
var cors = require("cors");

router.use(cors());

router.post("/", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  console.log(req.body);
  models.applicants
    .create({
      FirstName: req.body.firstName,
      LastName: req.body.lastName,
      PhoneNumber: req.body.phoneNumber,
      Height: req.body.height,
      weight: req.body.weight,
      GoalWeight: req.body.goalWeight,
      GoalDescription: req.body.goalDescription,
      Program: req.body.program,
    })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
      res.statusMessage(err);
    });
});

router.get("/", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  models.applicants
    .findAll()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(500).send();
      res.statusMessage(err);
    });
});

module.exports = router;
