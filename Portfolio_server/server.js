require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.post("/contact", async (req, res) => {
  const { name, email, phone, subject, reason, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, Email and Message are required",
    });
  }

  try {
    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // from Render
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // Mail to YOU (admin)
    const adminMail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject || "New Contact Message",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Reason: ${reason || "N/A"}

Message:
${message}
      `,
    };

    // Auto reply to USER
    const userMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting me",
      text: `Hi ${name}, I received your message. I will reply soon.`,
    };

    // Send both emails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    console.log("Email sent");

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(" Error:", error);

    res.status(500).json({
      success: false,
      message: "Email failed",
    });
  }
});

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
