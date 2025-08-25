import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaUserLarge } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")); 
  const isLoggedIn = !!token;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <header className={`${styles["custom-navbar"]} ${scrolled ? styles["scrolled"] : ""}`}>
      
      {/* Agar user admin hai to logo hi hide kar do */}
      {user?.role !== "admin" && (
        <div className={styles["logo"]}>Bean Scene</div>
      )}

      {/* Hamburger for mobile */}
      {user?.role !== "admin" && (
        <div
          className={styles["hamburger"]}
          onClick={() => setOpenMenu(!openMenu)}
        >
          ☰
        </div>
      )}

      <nav
        className={`${styles["nav-links"]} ${openMenu ? styles["open"] : ""}`}
      >
        <ul>
          {/* Agar role admin nahi hai tabhi ye links dikhana */}
          {user?.role !== "admin" && (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </>
          )}

          {isLoggedIn ? (
            <>
              <li className={styles["welcome"]}>
                <FaUserLarge style={{ marginRight: "4px", color: "#fbbf24" }} />
                {user?.role === "admin" ? "Admin" : user?.name || "User"}
              </li>
              <li>
                <button onClick={handleLogout} className={styles["logout"]}>
                  <TbLogout />
                </button>
              </li>
            </>
          ) : (
            user?.role !== "admin" && ( // Admin ke liye login/signup buttons bhi nahi
              <>
                <li>
                  <Link to="/login">
                    <button className={styles["signin"]}>Login</button>
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <button className={styles["signup"]}>Sign Up</button>
                  </Link>
                </li>
              </>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
