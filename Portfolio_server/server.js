const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => res.send("Backend running!"));

// Contact route
app.post("/contact", async (req, res) => {
  console.log("Request received:", req.body);

  const { name, email, phone, subject, reason, message } = req.body;

  try {
    // ✅ FIXED transporter (IMPORTANT)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // VERY IMPORTANT
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 20000, // prevent timeout issues
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Reason: ${reason}
Message: ${message}
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.messageId);

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("EMAIL ERROR FULL:", error);

    res.status(500).json({
      success: false,
      message: "Email failed",
      error: error.message, // helpful for debugging
    });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
