import React, { useState, useEffect } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import styles from "./AdminPanel.module.css";

const AdminPanel = () => {
  const [showOrders, setShowOrders] = useState(false);

  //     States for Dashboard Stats
  const [ordersCount, setOrdersCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [bestSeller, setBestSeller] = useState("N/A");

  //     State for Recent Orders
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    //     Prevent back navigation
    window.history.pushState(null, null, window.location.href);
    const handleBack = () => {
      window.history.pushState(null, null, window.location.href);
    };
    window.addEventListener("popstate", handleBack);

    //     Fetch Dashboard data
    const fetchDashboard = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/dashboard");
        const data = await res.json();

        setOrdersCount(data.totalOrders);
        setCustomersCount(data.customers);
        setRevenue(data.revenue);
        setBestSeller(data.bestSeller);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };

    //     Fetch Orders data
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/orders");
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchDashboard();
    fetchOrders();

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className={styles["heroAdmin"]}></div>

      <section className={styles["admin-section"]}>
        <h2>Admin Dashboard</h2>
        <p className={styles["admin-tagline"]}>
          Manage your coffee shop orders, products, and customers in one place.
        </p>

        {/* Dashboard Stats */}
        <div className={styles["dashboard-stats"]}>
          <div className={styles["card"]}>
            <h3>☕ Total Orders</h3>
            <p>{ordersCount}</p>
          </div>
          <div className={styles["card"]}>
            <h3>👨‍👩‍👧 Customers</h3>
            <p>{customersCount}</p>
          </div>
          <div className={styles["card"]}>
            <h3>💰 Revenue</h3>
            <p>₹{revenue}</p>
          </div>
          <div className={styles["card"]}>
            <h3>⭐ Best Seller</h3>
            <p>{bestSeller}</p>
          </div>
        </div>

        {/* Orders Table */}
        {/* <div className={styles["orders-section"]}>
          <h3>Recent Orders</h3>
          <button
            className={styles["toggle-btn"]}
            onClick={() => setShowOrders(!showOrders)}
          >
            {showOrders ? "Hide Orders" : "View Orders"}
          </button>

          {showOrders && (
            <table className={styles["orders-table"]}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((order, index) => (
                    <tr key={order._id}>
                      <td>{index + 1}</td>
                      <td>{order.user?.name || "N/A"}</td>
                      <td>{order.user?.email || "N/A"}</td>
                      <td>{order.productName}</td>
                      <td>₹{order.amount}</td>
                      <td>{order.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ textAlign: "center" }}>
                      No orders found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div> */}


        
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default AdminPanel;
