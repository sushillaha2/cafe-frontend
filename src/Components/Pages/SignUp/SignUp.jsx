// import React, { useState } from 'react';
// import axios from '../../../Api/axios';
// import Navbar from '../../layout/Navbar';
// import Footer from '../../layout/Footer';
// import styles from './SignUp.module.css';

// function SignUp() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     try {
//       const response = await axios.post('/api/auth/signup', formData);
//       setMessage('✅ Account created successfully. You can now log in.');
//     } catch (err) {
//       setMessage(err.response?.data?.message || 'Something went wrong');
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

//           {message && <p style={{ marginTop: '1rem', color: 'green' }}>{message}</p>}

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




// new code

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../Api/axios';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import styles from './SignUp.module.css';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('/api/auth/signup', formData);

      setSuccess('✅ Account created successfully! Redirecting to login...');
      
      // redirect after 2 sec
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
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
          <form className={styles["signup-form"]} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
            <button type="submit">Sign Up</button>
          </form>

          {error && <p style={{ marginTop: '1rem', color: 'red' }}>{error}</p>}
          {success && <p style={{ marginTop: '1rem', color: 'green' }}>{success}</p>}

          <p className={styles["signup-bottom-text"]}>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default SignUp;
