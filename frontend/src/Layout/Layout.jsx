import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Routers from "../Routers/Routers";
import { BrowserRouter } from "react-router-dom";

const Layout = () => {
  return (
    <div>
     
        <Header />
        {/* <Routers/> */}
        <Routers />
        <Footer />/
      
    </div>
  );
};

export default Layout;
