// models/InternshipApplication.js
const mongoose = require('mongoose');

const InternshipApplicationSchema = new mongoose.Schema({
  internshipTitle: String,
  name: String,
  email: String,
  phone: String,
  resume: String, // file path or URL
}, { timestamps: true });

module.exports = mongoose.model('InternshipApplication', InternshipApplicationSchema);
