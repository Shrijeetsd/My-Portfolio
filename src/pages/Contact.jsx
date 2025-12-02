import React, { useState } from "react";
import { motion } from "framer-motion";

import githubLogo from "../../public/github.png";
import linkedinLogo from "../../public/linkedin.png";
import gmailLogo from "../../public/gmail.png";
import whatsappLogo from "../../public/whatsapp.png";
import instagramLogo from "../../public/insta.png";
import facebookLogo from "../../public/facebook.png";

import "../CSS/Contact.css"
import '../index.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    setStatus("Sending...");

    fetch("https://formsubmit.co/ajax/shrijitdesai8459@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.contact, // Changed to 'email' for FormSubmit
        subject: form.subject,
        message: form.message,
        _captcha: "false"
      })
    })
      .then(async (response) => {
        const text = await response.text();
        console.log("Raw Response:", text);
        try {
          return JSON.parse(text);
        } catch (e) {
          console.error("JSON Parse Error:", e);
          throw new Error("Server returned non-JSON response. Check console.");
        }
      })
      .then(data => {
        console.log("Parsed Data:", data);
        if (data.success === "true" || data.success === true) {
          setStatus("✅ Message sent! Check your email (Spam) to ACTIVATE.");
          setForm({ name: "", contact: "", subject: "", message: "" });
        } else {
          setStatus("❌ Failed: " + (data.message || "Unknown error"));
        }
      })
      .catch(error => {
        console.error("Fetch Error:", error);
        setStatus("❌ Error. See Console (F12) for details.");
      });
  };

  const quickLinks = [
    { img: githubLogo, title: "GitHub", link: "https://github.com/Shrijeetsd" },
    { img: linkedinLogo, title: "LinkedIn", link: "https://www.linkedin.com/in/shrijeetdesai/" },
    { img: gmailLogo, title: "Email", link: "mailto:shrijitdesai8459@gmail.com" },
    { img: whatsappLogo, title: "WhatsApp", link: "https://wa.me/+918459318217" },
    { img: instagramLogo, title: "Instagram", link: "https://www.instagram.com/shrijit_07?igsh=MTJ0ZGZoNG1iNzdnbA%3D%3D&utm_source=qr" },
  ];

  return (
    <section className="contact-section">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="contact-title"
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="contact-subtitle"
      >
        Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!
      </motion.p>

      {/* Quick Links */}
      <motion.div className="contact-links">
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="social-icon"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Your Email or Phone" value={form.contact} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message..." value={form.message} onChange={handleChange} rows="5" required />
        <motion.button type="submit" className="contact-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          🚀 Send Message
        </motion.button>

        {status && <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="contact-status">{status}</motion.p>}
      </motion.form>
    </section>
  );
}
