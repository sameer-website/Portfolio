import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    reason: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.reason) {
      newErrors.reason = "Please select a reason.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setSubmitError("");
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://portfolio-23f2.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setSubmitError(
          data?.message || "Something went wrong. Please try again.",
        );
        return;
      }

      setSubmitted(true);
      setErrors({});

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        reason: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
        setTimeout(() => {
          setSubmitError(false);
        }, 3000);
      setSubmitError("Unable to send message. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-20">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Contact Me
        </h1>

        <p className="text-sm text-gray-500 text-center mb-4">
          I usually respond within 24 hours
        </p>

        {submitted && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
            Message sent successfully!
          </div>
        )}

        {submitError && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Reason */}
          <div>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Reason</option>
              <option value="job">Job Opportunity</option>
              <option value="freelance">Freelance Work</option>
              <option value="project">Project Discussion</option>
              <option value="other">Other</option>
            </select>
            {errors.reason && (
              <p className="text-sm text-red-600 mt-1">{errors.reason}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              rows="4"
              maxLength="500"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
            <p className="text-sm text-gray-500 text-right">
              {formData.message.length}/500
            </p>
            {errors.message && (
              <p className="text-sm text-red-600 mt-1">{errors.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-white p-3 rounded-lg ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
