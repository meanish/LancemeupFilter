import React from "react";
import { NavLink } from "react-router-dom";
import TitleFilter from "./Filter/TitleFilter";
import CategoryFilter from "./Filter/CategoryFilter";
import PriceFIlter from "./Filter/PriceFIlter";
import { FilterbarStyle } from "../../components/Home/FIlterbar.styled";
import { GlobalProduct } from "../../context/ProductContext";
import Button from "@mui/material/Button";
import logoImage from "../../images/logo2.png";

const Filterbar = () => {
  const { clearFilter } = GlobalProduct();
  return (
    <FilterbarStyle>
      <div className="nav">
        <div className="product_input">
          <TitleFilter />
        </div>
        <div className="company_logo">
          <NavLink className="logo" to="/lancemeup">
            <img src={logoImage} alt="logo.png" className="logo_img" />
          </NavLink>
        </div>
        <div className="custom_filter">
          <div className="category_filter">
            <CategoryFilter />
          </div>
          <div className="price_filter">
            <PriceFIlter />
          </div>
          <div className="clear_filter">
            <Button
              variant="outlined"
              color="error"
              className="clearIcon"
              onClick={clearFilter}
            >
              Clear All
            </Button>
          </div>
        </div>
      </div>
    </FilterbarStyle>
  );
};

export default Filterbar;
