// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from '../../../Api/axios';
// import Navbar from '../../layout/Navbar';
// import Footer from '../../layout/Footer';
// import styles from './SignUp.module.css';

// function SignUp() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const response = await axios.post('/api/auth/signup', formData);

//       setSuccess('✅ Account created successfully! Redirecting to login...');

//       // redirect after 2 sec
//       setTimeout(() => {
//         navigate('/login');
//       }, 2000);

//     } catch (err) {
//       setError(err.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className={styles["heroAboutUs"]}></div>

//       <section className={styles["signup-section"]}>
//         <h2 className={styles["signup-title"]}>Join Bean Scene</h2>
//         <p className={styles["signup-subtitle"]}>
//           Create an account to start your coffee journey with us ☕
//         </p>

//         <div className={styles["signup-box"]}>
//           <form className={styles["signup-form"]} onSubmit={handleSubmit}>
//             <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
//             <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
//             <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
//             <button type="submit">Sign Up</button>
//           </form>

//           {error && <p style={{ marginTop: '1rem', color: 'red' }}>{error}</p>}
//           {success && <p style={{ marginTop: '1rem', color: 'green' }}>{success}</p>}

//           <p className={styles["signup-bottom-text"]}>
//             Already have an account? <a href="/login">Login</a>
//           </p>
//         </div>
//       </section>

//       {/* <Footer /> */}
//     </>
//   );
// }

// export default SignUp;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../Api/axios";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import styles from "./SignUp.module.css";

function SignUp() {
  const navigate = useNavigate();

  // State
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Input Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // STEP 1 → Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await api.post("/api/auth/send-otp", formData); // ✅ name, email, password sab jayega
      setSuccess("✅ OTP sent to your email. Please check and enter it below.");
      setOtpSent(true);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
    }
  };

  // STEP 2 → Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await api.post("/api/auth/verify-otp", {
        email: formData.email,
        otp,
      });

      setSuccess("🎉 Account created successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <>
      <Navbar />

      <div className={styles["heroAboutUs"]}></div>

      <section className={styles["signup-section"]}>
        <h2 className={styles["signup-title"]}>Join Bean Scene</h2>
        <p className={styles["signup-subtitle"]}>
          Create an account to start your coffee journey with us ☕
        </p>

        <div className={styles["signup-box"]}>
          {!otpSent ? (
            // STEP 1 → Signup Form
            <form className={styles["signup-form"]} onSubmit={handleSendOtp}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit">Send OTP</button>
            </form>
          ) : (
            // STEP 2 → OTP Verification
            <form className={styles["signup-form"]} onSubmit={handleVerifyOtp}>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button type="submit">Verify OTP</button>
            </form>
          )}

          {/* Messages */}
          {error && <p style={{ marginTop: "1rem", color: "red" }}>{error}</p>}
          {success && <p style={{ marginTop: "1rem", color: "green" }}>{success}</p>}

          <p className={styles["signup-bottom-text"]}>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </section>

      {/* Footer optional */}
      {/* <Footer /> */}
    </>
  );
}

export default SignUp;
