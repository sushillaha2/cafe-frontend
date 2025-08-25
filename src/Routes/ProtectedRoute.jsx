// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children, role }) => {
//   const user = JSON.parse(localStorage.getItem("user")); // 👈 login ke baad yaha user ka data store hoga

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   if (role && user.role !== role) {
//     return <Navigate to="/" />; // agar admin nahi hai to home page bhej do
//   }

//   return children;
// };

// export default ProtectedRoute;





import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // Agar user login hi nahi hai
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Agar role mismatch hai (jaise normal user admin page access kare)
  if (role && user.role !== role) {
    return <Navigate to="/404" replace />;
  }

  return children;
};

export default ProtectedRoute;

