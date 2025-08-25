// import { Routes, Route } from "react-router-dom";
// import Home from "../Components/Pages/Home/Home";
// import Menu from "../Components/Pages/Menu/Menu";
// import AboutUs from "../Components/Pages/AboutUs/AboutUs";
// import ContactUs from "../Components/Pages/ContactUs/ContactUs";
// import Login from "../Components/Pages/Login/Login";
// import SignUp from "../Components/Pages/SignUp/SignUp";
// import NotFound from "../Components/Pages/NotFound/NotFound";
// import Cart from "../Components/Pages/Cart/Cart";
// import Checkout from "../Components/Pages/CheckOut/CheckOut";
// import ThankYou from "../Components/Pages/ThankYou/ThankYou";
// import AdminPanel from "../Components/Pages/Admin/AdminPanel";



// const AppRoutes = () => (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/menu" element={<Menu />} />
//     <Route path="/aboutus" element={<AboutUs />} />
//     <Route path="/contactus" element={<ContactUs />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/signup" element={<SignUp />} />
//     <Route path="/cart" element={<Cart />} />
//     <Route path="/checkout" element={<Checkout />} />
//     <Route path="/admin" element={<AdminPanel />} />
//     <Route path="/thankyou" element={<ThankYou />} />

//     <Route path="*" element={<NotFound />} />
//   </Routes>
// );

// export default AppRoutes;



// import { Routes, Route } from "react-router-dom";
// import Home from "../Components/Pages/Home/Home";
// import Menu from "../Components/Pages/Menu/Menu";
// import AboutUs from "../Components/Pages/AboutUs/AboutUs";
// import ContactUs from "../Components/Pages/ContactUs/ContactUs";
// import Login from "../Components/Pages/Login/Login";
// import SignUp from "../Components/Pages/SignUp/SignUp";
// import NotFound from "../Components/Pages/NotFound/NotFound";
// import Cart from "../Components/Pages/Cart/Cart";
// import Checkout from "../Components/Pages/CheckOut/CheckOut";
// import ThankYou from "../Components/Pages/ThankYou/ThankYou";
// import AdminPanel from "../Components/Pages/Admin/AdminPanel";

// // 🔒 Protected Route wrapper
// const ProtectedRoute = ({ children }) => {
//   const user = JSON.parse(localStorage.getItem("user")); // login ke baad user store hota hai
//   if (!user || user.role !== "admin") {
//     return <Login />; // agar admin nahi hai to login page par bhej do
//   }
//   return children;
// };

// const AppRoutes = () => (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/menu" element={<Menu />} />
//     <Route path="/aboutus" element={<AboutUs />} />
//     <Route path="/contactus" element={<ContactUs />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/signup" element={<SignUp />} />
//     <Route path="/cart" element={<Cart />} />
//     <Route path="/checkout" element={<Checkout />} />
//     <Route
//       path="/admin"
//       element={
//         <ProtectedRoute>
//           <AdminPanel />
//         </ProtectedRoute>
//       }
//     />
//     <Route path="/thankyou" element={<ThankYou />} />
//     <Route path="*" element={<NotFound />} />
//   </Routes>
// );

// export default AppRoutes;





import { Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Menu from "../Components/Pages/Menu/Menu";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";
import ContactUs from "../Components/Pages/ContactUs/ContactUs";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/SignUp/SignUp";
import NotFound from "../Components/Pages/NotFound/NotFound";
import Cart from "../Components/Pages/Cart/Cart";
import Checkout from "../Components/Pages/CheckOut/CheckOut";
import ThankYou from "../Components/Pages/ThankYou/ThankYou";
import AdminPanel from "../Components/Pages/Admin/AdminPanel";

// 🔒 Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")); // login ke baad user store hota hai

  if (!user || user.role !== "admin") {
    return <NotFound />; // ❌ Unauthorized user ko 404 dikhao
  }

  return children;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/contactus" element={<ContactUs />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route
      path="/admin"
      element={
        <ProtectedRoute>
          <AdminPanel />
        </ProtectedRoute>
      }
    />
    <Route path="/thankyou" element={<ThankYou />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
