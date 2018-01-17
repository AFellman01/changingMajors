var app = require("express");
var Job = require("./../models/job.js");
var router = app.Router;

router.post("/JobSubmit", (req, res) => {
.create(req.body)
  .then(function(dbchangingMajors) {
    res.json(dbchangingMajors);
  })
  .catch(function(err) {
    // If an error occurs, send the error to the client
    res.json(err);
  });
});