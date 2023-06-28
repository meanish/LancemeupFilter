import React, { useState, useEffect } from "react";
import { GlobalProduct } from "../../../context/ProductContext";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import { CategoryPriceStyle } from "../../../components/Home/Filter/CategoryPriceStyle.styled";

const PriceFIlter = () => {
  const { filters, priceRange, UpdateFilterSearch, filterInput } =
    GlobalProduct();

  const [selectedPrice, setSelectedPrice] = useState(
    filterInput.price ? filterInput.price : ""
  );



  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
    UpdateFilterSearch("price", event.target.value);
  };

  useEffect(() => {
    if (!filterInput.price) {
      setSelectedPrice("");
      UpdateFilterSearch("price", "");
    }
  }, [filterInput]);

  const handleClearSelection = () => {
    setSelectedPrice("");
    UpdateFilterSearch("price", "");
  };
  return (
    <CategoryPriceStyle>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Price"
          className="text_options"
          value={selectedPrice}
          onChange={handlePriceChange}
          defaultValue="USD"
          InputProps={{
            endAdornment: selectedPrice && (
              <IconButton
                size="small"
                onClick={handleClearSelection}
                className="remove"
              >
                <CloseIcon />
              </IconButton>
            ),
          }}
        >
          {priceRange.map((option) => (
            <MenuItem
              key={option.label}
              value={option.label}
              name="price"
              onClick={() => UpdateFilterSearch("price", option.label)}
            >
              less than ${option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </CategoryPriceStyle>
  );
};

export default PriceFIlter;
