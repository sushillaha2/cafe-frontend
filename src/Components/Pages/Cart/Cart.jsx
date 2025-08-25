import React, { useEffect, useState } from "react";
import axios from "../../../Api/axios";
import Navbar from "../../layout/Navbar";
// import Footer from "../../layout/Footer"; 
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdShoppingCartCheckout } from "react-icons/md";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      setError("You are not logged in.");
      setLoading(false);
      return;
    }

    const fetchCart = async () => {
      try {
        const response = await axios.get(`/api/cart/${userId}`);
        setCart(response.data);
        localStorage.setItem("cartCount", response.data.items.length);
      } catch (err) {
        console.error("Error fetching cart:", err);
        setError("Failed to fetch cart.");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userId]);

  const handleRemove = async (title) => {
    try {
      const response = await axios.delete(`/api/cart/${userId}/item`, {
        data: { title },
      });
      setCart(response.data);
      localStorage.setItem("cartCount", response.data.items.length);
    } catch (err) {
      console.error("Failed to remove item:", err);
      alert("Failed to remove item from cart.");
    }
  };

  const updateQuantity = async (title, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      const response = await axios.patch(`/api/cart/${userId}/item`, {
        title,
        quantity: newQuantity,
      });
      setCart(response.data);
    } catch (err) {
      console.error("Failed to update quantity:", err);
    }
  };

  const totalPrice =
    cart?.items?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;

  const handleCheckout = () => {
    navigate("/checkout"); 
  };

  return (
    <>
      <Navbar />
      <div className={styles["Cart-banner"]}></div>

      <div className={styles["cart-container"]}>
        <h2>🛒 Your Cart</h2>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className={styles["error-message"]}>{error}</p>
        ) : cart?.items?.length > 0 ? (
          <>
            <ul>
              {cart.items.map((item, index) => (
                <li key={index} className={styles["cart-item"]}>
                  <div className={styles["cart-item-header"]}>
                    <span className={styles["cart-item-title"]}>
                      {item.title}
                    </span>
                    <span className={styles["cart-item-price"]}>
                      ₹{item.price}
                    </span>
                  </div>

                  <div className={styles["cart-controls"]}>
                    <div className={styles["quantity-control"]}>
                      <button
                        className={styles["quantity-btn"]}
                        onClick={() =>
                          updateQuantity(item.title, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className={styles["quantity-count"]}>
                        {item.quantity}
                      </span>
                      <button
                        className={styles["quantity-btn"]}
                        onClick={() =>
                          updateQuantity(item.title, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className={styles["delete-btn"]}
                      onClick={() => handleRemove(item.title)}
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles["cart-total"]}>
              <strong>Total: ₹{totalPrice}</strong>
            </div>

            <button className={styles["checkout-btn"]} onClick={handleCheckout}>
              Check Out  <span style={{ marginLeft: "8px" }}><MdShoppingCartCheckout /></span>
            </button>
          </>
        ) : (
          <p>Your cart is currently empty.</p>
        )}
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Cart;
