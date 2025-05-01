// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Load environment variables
dotenv.config();

// Import models
const CourseInterest = require('./models/CourseIntersest'); // corrected typo: CourseIntersest ➔ CourseInterest
const InternshipApplication = require('./models/internship'); // corrected to consistent naming

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer storage setup (Cloudinary)
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'resumes',
    allowed_formats: ['pdf', 'doc', 'docx'],
    resource_type: 'raw',
  },
});
const upload = multer({ storage });

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ========== Routes ========== //

// Route: Course Interest Submission
app.post('/api/course-interest', async (req, res) => {
  try {
    const { courseName, name, interestedTech, phoneNumber } = req.body;

    const newInterest = new CourseInterest({ courseName, name, interestedTech, phoneNumber });
    await newInterest.save();

    res.status(201).json({ message: '✅ Course interest saved successfully.' });
  } catch (error) {
    console.error('❌ Error saving course interest:', error);
    res.status(500).json({ error: 'Failed to save course interest.' });
  }
});

// Route: Internship Application (with Resume Upload + Email)
app.post('/api/internship-apply', upload.single('resume'), async (req, res) => {
  try {
    const { internshipTitle, name, email, phone } = req.body;
    const resumeUrl = req.file?.path || null; // Optional chaining

    const newApplication = new InternshipApplication({
      internshipTitle,
      name,
      email,
      phone,
      resume: resumeUrl,
    });
    await newApplication.save();

    // Send acknowledgment email
    await transporter.sendMail({
      from: `"Code Vibe Innovations" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Application Received for ${internshipTitle}`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for applying for the <strong>${internshipTitle}</strong> internship at Code Vibe Innovations.</p>
        <p>We have successfully received your application and will review it shortly.</p>
        <br/>
        <p>Best Regards,<br/>Code Vibe Innovations Team</p>
      `,
    });

    res.status(201).json({
      message: '✅ Internship application submitted and email sent!',
      data: newApplication,
    });
  } catch (error) {
    console.error('❌ Error submitting internship application:', error);
    res.status(500).json({ error: 'Failed to submit internship application.' });
  }
});

// Server listening
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
