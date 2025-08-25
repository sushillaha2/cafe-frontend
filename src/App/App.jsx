import React from "react";
import AppRoutes from "../Routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import FloatingCartIcon from "../Components/Pages/Cart/FloatingCartIcon/FloatingCartIcon";


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <FloatingCartIcon />
    </BrowserRouter>
  );
}

export default App;
