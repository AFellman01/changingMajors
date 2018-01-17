const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jobSchema = new Schema({
  company_name: { type: String, required: true },
  title: { type: String, required: true },
  salary: { type: String, required: true},
  next_action: { type: , required: true},
  company_url: { type: String, required: true }
});
const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
