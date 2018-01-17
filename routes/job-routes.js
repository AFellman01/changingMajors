const router = require("express").Router();
const Job = require("../models/job.js");

// router.post("/jobSubmit", (req, res) => {
// .create(req.body)
//   .then(function(dbchangingMajors) {
//     res.json(dbchangingMajors);
//   })
//   .catch(function(err) {
//     // If an error occurs, send the error to the client
//     res.json(err);
//   });
// });



// Assuming this is from a POST request and the body of the
// request contained the JSON of the new "todo" item to be saved
router.post("/jobSubmit", (req, res) => {
  let worker = new Job(req.body);
  worker.save((err, createdJobObject) => {
    console.log(err);
    if (err) {
      res.status(500).send(err);
    }
    // This createdTodoObject is the same one we saved, but after Mongo
    // added its additional properties like _id.
    res.status(200).send(createdJobObject);
  });
});
router.get('/auth/user', (req, res) => {
  res.send('hi');
});


// This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.todoId.
// Find the existing resource by ID
router.post("/jobUpdate", (req, res) => {
  Job.findById(req.params.jobId, (err, job) => {
    // Handle any possible database errors
    if (err) {
      res.status(500).send(err);
    } else {
      // Update each attribute with any possible attribute that may have been submitted in the body of the request
      // If that attribute isn't in the request body, default back to whatever it was before.
      job.company_name = req.body.company_name || job.company_name;
      job.title = req.body.title || job.title;
      job.salary = req.body.salary || job.salary;
      job.next_action = req.next_action || job.next_action
      job.company_url = req.company_url || job.company_url
      job.save((err, job) => {
        if (err) {
          res.status(500).send(err)
        }
        res.status(200).send(job);
      });
    }
  });
});

// The "todo" in this callback function represents the document that was found.
// It allows you to pass a reference back to the client in case they need a reference for some reason.
router.post("/jobDelete", (req, res) => {
  Job.findByIdAndRemove(req.params.jobId, (err, job) => {
    // We'll create a simple object t o send back with a message and the id of the document that was removed
    // You can really do this however you want, though.
    let response = {
      message: "Job information successfully deleted",
      id: job._id
    };
    res.status(200).send(response);
  });
});

// Need to determine best find by keyword request, and how to organize keywords. Cory wants a search function. I think a cloud would be more practical. We'll also need to somehow pass requests from the HTML to the CRUD on the backend, and I'm not entirely sure how we'd do that, though I don't think it'll be that different from SQL.

// Of rather more importance to me is how we make sure unauthorized parties don't edit or delete information for fun. It's a problem we considered on my last project, but without much success. If the goal here is to be helpful, then we have no choice but to be fastidious with maintenance. The idea of giving every user unrestricted access to my database gives me the shivers.

// As to the keyword issue, we'll build a keyword database that's associated with the job database. Each job could have many keywords. I would prefer to provide a list of keywords for users to choose from, but I think I can standardize user input in the front end, removing some of the concerns. I would much prefer to know that the job CRUD functions are working before we do that, so it's moot. That's our next goal.

module.exports = router;
