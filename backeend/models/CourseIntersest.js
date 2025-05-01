const mongoose = require('mongoose');

const courseInterestSchema = new mongoose.Schema({
  courseName: String,
  name: String,
  interestedTech: String,
  phoneNumber: String,
});

module.exports = mongoose.model('CourseInterest', courseInterestSchema);
