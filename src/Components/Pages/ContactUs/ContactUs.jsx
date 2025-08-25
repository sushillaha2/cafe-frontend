import React, { useState } from 'react';
import axios from '../../../Api/axios';
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import styles from "./ContactUs.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await axios.post("/api/contact", formData);
      toast.success(`☕ ${res.data.message || "Message sent successfully!"}`, {
        style: {
          backgroundColor: "#d9c3a2",
          color: "#3e2723",
        },
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error("❌ Something went wrong. Please try again.", {
        style: {
          backgroundColor: "#f8d7da",
          color: "#842029",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles['heroAboutUs']}></div>

      <section className={styles['contactus-section']}>
        <h2>Get in Touch</h2>
        <p className={styles['contactus-subheading']}>
          We'd love to hear from you. Reach out with questions, feedback, or just to say hi!
        </p>

        <div className={styles['contactus-content']}>
          <div className={styles['contactus-form']}>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
              <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
              <textarea name="message" placeholder="Your Message" rows="6" required value={formData.message} onChange={handleChange}></textarea>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className={styles['contactus-info']}>
            <h3>Contact Information</h3>
            <p>📍 123 Coffee Street, Roast City</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ contact@beanscene.com</p>

            <h3>Working Hours</h3>
            <p>Mon - Sat: 8:00 AM - 9:00 PM</p>
            <p>Sun: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </section>

      {/* Notification system */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss={false}
        pauseOnHover
        draggable
        theme="colored"
      />
      <Footer />
    </>
  );
}

export default ContactUs;
