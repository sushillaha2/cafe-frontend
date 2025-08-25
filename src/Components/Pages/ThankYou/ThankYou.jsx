import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.thankYouContainer}>
      <h2>Thank You!</h2>
      <p>Your order has been placed successfully. We appreciate your purchase!</p>
      <div className={styles.buttonGroup}>
        <button onClick={() => navigate("/")}>Go Home</button>
        {/* <button onClick={() => navigate("/feedback")}>Feedback</button> */}
      </div>
    </div>
  );
};

export default ThankYou;
