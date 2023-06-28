import React from "react";
import Filterbar from "./Filterbar";
import Products from "./Products/Products";
const Home = () => {
  return (
    <>

        <div className="navbar">
          <Filterbar />
        </div>
        <div className="products_section">
          <Products />
        </div>

    </>
  );
};

export default Home;
