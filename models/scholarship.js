const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const scholarshipSchema = new Schema({
 organization: { type: String, required: true },
 name: {type: String, required: true},
 amount: { type: String, required: true },
 due_date: { type: String, required: true},
 keywords: {type: String, required: true},
 // next_action { type: , required: true},
 url: { type: String, required: true }
});
const Scholarship = mongoose.model("Scholarship", scholarshipSchema);
module.exports = Scholarship;
