const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jobSchema = new Schema({
  organization: { type: String, required: true },
  name: {type: String, required: true}
  amount: { type: String, required: true },
  due_date: { type: String, required: true},
  // next_action { type: , required: true},
  url: { type: String, required: true }
});
const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
