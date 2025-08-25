// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from '../../../Api/axios';
// import Navbar from "../../layout/Navbar";
// import Footer from "../../layout/Footer";
// import styles from "./Login.module.css";

// function Login() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       const res = await axios.post('/api/auth/login', formData);
//       const { token, user } = res.data;

//       // ✅ Store token and userId
//       localStorage.setItem('token', token);
//       localStorage.setItem('userId', user._id);
//       localStorage.setItem("user", JSON.stringify(res.data.user));


//       navigate('/', { state: { justLoggedIn: true } });
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className={styles["heroAboutUs"]}></div>

//       <section className={styles["login-section"]}>
//         <h2>Welcome Back</h2>
//         <p className={styles["login-subheading"]}>
//           Log in to continue your coffee journey with us ☕
//         </p>

//         <div className={styles["login-box"]}>
//           <form className={styles["login-form"]} onSubmit={handleSubmit}>
//             <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
//             <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
//             <button type="submit">Login</button>
//             {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
//             <p className={styles["login-helper"]}>
//               Don’t have an account? <a href="/signup">Sign up</a>
//             </p>
//           </form>
//         </div>
//       </section>

//       {/* <Footer /> */}
//     </>
//   );
// }

// export default Login;



// new code

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../Api/axios';
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('/api/auth/login', formData);
      const { token, user } = res.data;

      // ✅ Store token and user data
      localStorage.setItem('token', token);
      localStorage.setItem('userId', user._id);
      localStorage.setItem("user", JSON.stringify(user));

      // ✅ Navigate based on role
      if (user.role === "admin") {
        navigate("/admin"); // Admin dashboard
      } else {
        navigate("/", { state: { justLoggedIn: true } }); // Normal user
      }

    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles["heroAboutUs"]}></div>

      <section className={styles["login-section"]}>
        <h2>Welcome Back</h2>
        <p className={styles["login-subheading"]}>
          Log in to continue your coffee journey with us ☕
        </p>

        <div className={styles["login-box"]}>
          <form className={styles["login-form"]} onSubmit={handleSubmit}>
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Login</button>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
            <p className={styles["login-helper"]}>
              Don’t have an account? <a href="/signup">Sign up</a>
            </p>
          </form>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default Login;
