// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ShoppingCart } from "lucide-react";
// import "./FloatingCartIcon.css";

// function FloatingCartIcon() {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user"));

//   const [cartCount, setCartCount] = useState(
//     parseInt(localStorage.getItem("cartCount")) || 0
//   );

//   // Check localStorage every 1 second and update cart count if it changes
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const currentCount = parseInt(localStorage.getItem("cartCount")) || 0;
//       setCartCount((prevCount) => {
//         return prevCount !== currentCount ? currentCount : prevCount;
//       });
//     }, 1000); // 1 second

//     return () => clearInterval(interval);
//   }, []);

//   if (!user) return null; // 🔒 Don't show icon if user not logged in

//   return (
//     <div className="floating-cart-icon" onClick={() => navigate("/cart")}>
//       <ShoppingCart size={28} />
//       {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
//     </div>
//   );
// }

// export default FloatingCartIcon;











import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import "./FloatingCartIcon.css";

function FloatingCartIcon() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  const [cartCount, setCartCount] = useState(
    parseInt(localStorage.getItem("cartCount")) || 0
  );

  // Check localStorage every 1 second and update cart count if it changes
  useEffect(() => {
    const interval = setInterval(() => {
      const currentCount = parseInt(localStorage.getItem("cartCount")) || 0;
      setCartCount((prevCount) => {
        return prevCount !== currentCount ? currentCount : prevCount;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 🔒 Hide if user not logged in OR user is admin OR current path starts with /admin
  if (!user || user?.role === "admin" || location.pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="floating-cart-icon" onClick={() => navigate("/cart")}>
      <ShoppingCart size={28} />
      {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
    </div>
  );
}

export default FloatingCartIcon;
