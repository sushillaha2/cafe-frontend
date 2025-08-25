import React, { useState } from 'react';
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
// import styles from "./Aboutus.module.css";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const [showMap, setShowMap] = useState(false);

  const handleMapToggle = () => {
    setShowMap(!showMap);
  };

  return (
    <>
      <Navbar />

      {/* Top Banner */}
      <div className={styles['heroAboutUs']}></div>

      <section className={styles['aboutus-section']}>
        <h2>About Bean Scene</h2>
        <p className={styles['aboutus-tagline']}>
          We're passionate about crafting the perfect cup and creating moments worth savoring.
        </p>

        <div className={styles['aboutus-content']}>
          <div className={styles['aboutus-image']}>
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
              alt="About Coffee"
            />
          </div>
          <div className={styles['aboutus-text']}>
            <h3>Our Story</h3>
            <p>
              Bean Scene began with a dream — to serve authentic, handcrafted coffee made with love and precision.
              We source the finest beans ethically, roast them to perfection, and brew each cup with attention to detail.
              Every sip tells a story of passion, community, and excellence.
            </p>

            <h3>Our Mission</h3>
            <p>
              We aim to be more than just a coffee shop. We're here to build a warm and welcoming space where people can unwind,
              connect, and celebrate life — one cup at a time.
            </p>

            <h3>Why Choose Us?</h3>
            <ul className={styles['aboutus-list']}>
              <li>🌱 Sustainable & Ethical Sourcing</li>
              <li>☕ Expertly Brewed, Every Time</li>
              <li>👨‍👩‍👧‍👦 Friendly Ambience & Great People</li>
              <li>🏆 Award-Winning Baristas</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles['aboutus-cta']}>
        <h3>Visit Us Today</h3>
        <p>Come in and experience what makes Bean Scene so special.</p>
        <button onClick={handleMapToggle} className={styles['aboutus-cta-btn']}>Find Location</button>
      </section>

      {/* Map Modal */}
      {showMap && (
        <div className={styles['map-modal']}>
          <div className={styles['map-content']}>
            <button className={styles['close-button']} onClick={handleMapToggle}>×</button>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d959158.5935809071!2d85.802804!3d20.10427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e025984c55%3A0xee1fcd1f11e55141!2sDLF%20Cyber%20City!5e0!3m2!1sen!2sus!4v1752509687084!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default AboutUs;
