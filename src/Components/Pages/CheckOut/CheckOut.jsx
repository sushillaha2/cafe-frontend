import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../CheckOut/CheckOut.module.css";
import Navbar from "../../../Components/layout/Navbar";
import axios from "../../../Api/axios";

const Checkout = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        paymentMethod: "cod",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId = localStorage.getItem("userId");
        console.log("Form Submitted:", formData);

        try {
            //  Place the order via backend
            await axios.post("/api/orders", { userId, ...formData });

            // Clear cart from MongoDB
            await axios.delete(`/api/cart/${userId}`);

            // Reset cart count in localStorage
            localStorage.setItem("cartCount", 0);

            // Navigate to thank you page
            navigate("/thankyou");
        } catch (error) {
            console.error("Error placing order:", error);
            alert("Failed to place order. Please try again.");
        }
    };


    return (
        <>
            <Navbar />
            <div className={styles["Cart-banner"]}></div>
            <div className={styles.checkoutContainer}>
                <h2>Checkout</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label>
                        Full Name:
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Address:
                        <textarea
                            name="address"
                            required
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        City:
                        <input
                            type="text"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        ZIP Code:
                        <input
                            type="text"
                            name="zip"
                            required
                            value={formData.zip}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Payment Method:
                        <select
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                        >
                            <option value="cod">Cash on Delivery</option>
                            <option value="card">Credit/Debit Card</option>
                            <option value="upi">UPI</option>
                        </select>
                    </label>

                    <button type="submit" className={styles.checkoutBtn}>
                        Place Order
                    </button>
                </form>
            </div>
        </>
    );
};

export default Checkout;
