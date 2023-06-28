import React, { useEffect, useState } from "react";
import { GlobalProduct } from "../../../context/ProductContext";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import { CategoryPriceStyle } from "../../../components/Home/Filter/CategoryPriceStyle.styled";

const CategoryFilter = () => {
  const {
    AllProduct,
    UpdateFilterSearch,
    FilterProduct,
    filters,
    filterInput,
  } = GlobalProduct();

  const [selectedCategory, setSelectedcategory] = useState(
    filterInput.category ? filterInput.category : ""
  );

  //getunique Values of category mapping from all the dB
  const getUniqueValue = (AllProduct, field) => {


    if (AllProduct) {
      let newVal = AllProduct.map((currEle, index) => {
        return currEle[field];
      });
      return (newVal = ["All", ...new Set(newVal)]);
    }
  };

  //For Unique value of category
  const categoryOnlyValue = getUniqueValue(AllProduct, "category"); //"category" same as in ApiCall

  //subsitutiing entered option in state
  const handleCategoryChange = (event) => {
    setSelectedcategory(event.target.value);
    UpdateFilterSearch("category", event.target.value);
  };

  //clearing the state
  useEffect(() => {
    if (!filterInput.price) {
      setSelectedcategory("");
      UpdateFilterSearch("category", "");
    }
  }, [filterInput]);

  //clearing the selection in browser
  const handleClearSelection = () => {
    setSelectedcategory("");
    UpdateFilterSearch("category", "");
  };

  return (
    <CategoryPriceStyle>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Category"
          className="text_options"
          value={selectedCategory}
          onChange={handleCategoryChange}
          InputProps={{
            endAdornment: selectedCategory && (
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
          {categoryOnlyValue.map((currEle, index) => (
            <MenuItem
              key={index}
              type="button"
              name="category"
              value={currEle}
              onClick={() => UpdateFilterSearch("category", currEle)}
            >
              {currEle}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </CategoryPriceStyle>
  );
};

export default CategoryFilter;
