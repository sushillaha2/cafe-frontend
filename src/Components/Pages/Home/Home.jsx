import React, { useState } from "react";  // Here i use  useState is used to change and track which testimonial is currently visible
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";


import styles from "../Home/Home.module.css";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import addToCart from "../Cart/AddToCart/AddToCart";




// Importing images/assets for various sections of the Home Pages
import {
  coffee_beans, banner_right,
  banner_left,
  men,
  Female_Profile,
  men_profile,
  men_profile_2,
  card_1,
  card_2,
  card_3,
  card_4,
  card_5,
  card_6,
  card_7,
  card_8
} from "../../../assets/asset";


function Home() {
  // Array of testimonial objects for the testimonial slider section
  const testimonials = [
    {
      text: "This is the best coffee I’ve ever had! Absolutely amazing.",
      name: "Sushil Laha",
      position: "Frontend Developer",
      image: men
    },
    {
      text: "Bean Scene gives me energy to start my day right.",
      name: "Priya Sharma",
      position: "Software Engineer",
      image: Female_Profile
    },
    {
      text: "A cup of joy! I love the ambiance and the service.",
      name: "Alex Johnson",
      position: "Designer",
      image: men_profile
    },
    {
      text: "Their coffee kickstarts my creativity every morning. Absolutely love the rich flavors!",
      name: "Devid",
      position: "Creative Director",
      image: men_profile_2
    }
  ];

  // State to manage current testimonial index
  const [current, setCurrent] = useState(0);
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  // Show previous testimonial (loops to end if at the beginning)
  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const navigate = useNavigate();




  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (location.state?.justLoggedIn) {
      setShowAlert(true);
      window.history.replaceState({}, document.title); // Clear state to avoid re-trigger
    }
  }, [location.state]);



  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Subscribed successfully!");
        setEmail(""); // Clear input
      } else {
        alert(`🔖  ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };



  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles["hero-content"]}>
          <h3>We’ve got your morning covered with</h3>
          <h1>Coffee</h1>
          <p>
            It is best to start your day with a cup of coffee. Discover the best
            flavours coffee you will ever have. We provide the best for our
            customers.
          </p>
          <button className={styles["order-btn"]} onClick={() => navigate("/menu")}>Order Now</button>

        </div>
      </section>

      {/* About Section */}
      <section className={styles["about-section"]}>
        <div className={styles["about-content"]}>
          <h2>Discover the best coffee</h2>
          <p>
            Bean Scene is a coffee shop that provides you with quality coffee that
            helps boost your productivity and helps build your mood. Having a cup of
            coffee is good, but having a cup of real coffee is greater. There is no
            doubt that you will enjoy this coffee more than others you have ever
            tasted.
          </p>
          <button className={styles["learn-btn"]}>Learn More</button>
        </div>
        <div className={styles["about-image"]}>
          <img src={coffee_beans} alt="Coffee Beans Cup" />
        </div>
      </section>

      {/* Banner Image */}
      <div className={styles.banner_image}>
        <img src={banner_right} alt="Banner" />
      </div>


      {/* Coffee Menu Section */}
      <section className={styles["coffee-menu"]}>
        <h2>Enjoy a new blend of coffee style</h2>
        <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>

        <div className={styles["coffee-items"]}>
          <div className={styles["coffee-card"]}>
            <img src={card_1} alt="Cappuccino" />
            <h3>Cappuccino</h3>
            <p>Coffee 50% | Milk 50%</p>
            <strong>₹80.00</strong>
           <button onClick={() => addToCart({ title: "Cappuccino", price: 80.00 })}>Order Now</button>

          </div>
          <div className={styles["coffee-card"]}>
            <img src={card_2} alt="Chai Latte" />
            <h3>Chai Latte</h3>
            <p>Coffee 50% | Milk 50%</p>
            <strong>₹90.00</strong>
            <button onClick={() => addToCart({ title: "Chai Latte", price: 90.00 })}>Order Now</button>
          </div>
          <div className={styles["coffee-card"]}>
            <img src={card_3} alt="Macchiato" />
            <h3>Macchiato</h3>
            <p>Coffee 50% | Milk 50%</p>
            <strong>₹180.00</strong><br />
            <button onClick={() => addToCart({ title: "Macchiato", price: 180.00 })}>Order Now</button>
          </div>
          <div className={styles["coffee-card"]}>
            <img src={card_4} alt="Expresso" />
            <h3>Expresso</h3>
            <p>Coffee 50% | Milk 50%</p>
            <strong>₹80.00</strong><br />
            <button onClick={() => addToCart({ title: "Expresso", price: 80.00 })}>Order Now</button>
          </div>
        </div>
      </section>




      {/* Banner Image */}
      <div className={styles.banner_image2}>
        <img src={banner_left} alt="Banner" />
      </div>

      {/* Why Different Section */}
      <section className={styles["why-different"]}>
        <h2>Why are we different?</h2>
        <p className={styles.subheading}>We don’t just make your coffee, we make your day!</p>
        <div className={styles.features}>
          <div className={styles["feature-card"]}>
            <img src={card_5} alt="Supreme Beans" />
            <h3>Supreme Beans</h3>
            <p>Beans that provides great taste</p>
          </div>
          <div className={styles["feature-card"]}>
            <img src={card_6} alt="High Quality" />
            <h3>High Quality</h3>
            <p>We provide the highest quality</p>
          </div>
          <div className={styles["feature-card"]}>
            <img src={card_7} alt="Extraordinary" />
            <h3>Extraordinary</h3>
            <p>Coffee like you have never tasted</p>
          </div>
          <div className={styles["feature-card"]}>
            <img src={card_8} alt="Affordable Price" />
            <h3>Affordable Price</h3>
            <p>Our Coffee prices are easy to afford</p>
          </div>
        </div>
        <p className={styles["cta-text"]}>Great ideas start with great coffee, Let's help you achieve that</p>
        <h3 className={styles["cta-heading"]}>Get started today.</h3>
        <button className={styles["join-btn"]} onClick={() => navigate("/contactus")}>Join Us</button>

      </section>

      {/* Morning Hero Section */}
      <section className={styles["morning-hero"]}>
        <div className={styles["hero-content"]}>
          <h1>
            Get a chance to have an <br />
            <span>Amazing morning</span>
          </h1>
          <p>
            We are giving you a one time opportunity to <br />
            experience a better life with coffee.
          </p>
          <button className={styles["hero-btn"]} onClick={() => navigate("/menu")}>Order Now</button>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={styles["testimonial-section"]}>
        <h2>Our coffee perfection feedback</h2>
        <p className={styles.subheading}>Our customers have amazing things to say about us</p>

        <div className={styles["testimonial-box"]}>
          <div className={styles["testimonial-card"]}>
            <div className={styles["testimonial-content"]}>
              <span className={styles.quote}>❝</span>
              <p>{testimonials[current].text}</p>
              <h3>{testimonials[current].name}</h3>
              <p className={styles.position}>{testimonials[current].position}</p>
              <img
                src={testimonials[current].image}
                alt="Client"
                className={styles["testimonial-img"]}
              />
            </div>

            <div className={styles["testimonial-navigation"]}>
              <div className={styles["arrow-btn"] + " " + styles.left} onClick={handlePrev}>←</div>
              <div className={styles["arrow-btn"] + " " + styles.right} onClick={handleNext}>→</div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className={styles["subscribe-section"]}>
        <h2>Subscribe to get the Latest News</h2>
        <p>Don’t miss out on our latest news, updates, tips and special offers</p>
        <form className={styles["subscribe-form"]} onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>

      </section>

      <Footer />
    </>
  );
}

export default Home;
