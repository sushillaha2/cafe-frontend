import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import styles from "./Menu.module.css";
import MenuData from "./MenuData/MenuData";
import addToCart from "../Cart/AddToCart/AddToCart"; 

function Menu() {
  return (
    <>
      <Navbar />

      {/* Top Banner */}
      <div className={styles["heroAboutUs"]}></div>

      {/* Coffee Menu Section */}
      <section className={styles["menu-page"]}>
        <h2>Enjoy a new blend of coffee style</h2>
        <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>

        <div className={styles["menu-page-items"]}>
          {MenuData.map((item) => (
            <div key={item.id} className={styles["menu-page-card"]}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <strong>₹{item.price}</strong>
              <button onClick={() => addToCart(item)}>Order Now</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Menu;
