import React, { useState, useEffect } from "react";
import { GlobalProduct } from "../../../context/ProductContext";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextFieldStyle } from "../../../components/Home/Filter/TextFieldStyle.styled";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SearchList from "../SearchList/SearchList";

const TExtField = () => {
  const { open, InputSearchFilter, InputFilter, ClearInputFilter } =
    GlobalProduct();

  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(open);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  //event ahndler on ctrl k and esc
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        handleOpen();
      } else if (event.key === "Escape") {
        handleClose();
        ClearInputFilter();
        setInputValue("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    InputSearchFilter(event.target.value);
  };

  return (
    <TextFieldStyle>
      {!isOpen ? (
        <Button onClick={handleOpen} className="Search_btn">
          <SearchIcon className="icons" />
          <span className="search_text">Search</span>
          <span variant="outlined" disabled className="ctrl_btn">
            Ctrl K
          </span>
        </Button>
      ) : (
        <div className="search_pop">
          <div className="search_field">
            <div className="search_bar">
              <SearchIcon className="icons" />
            </div>
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleClose}
              autoFocus
              className="text_field"
              placeholder="Search Product"
            />
            <div className="cancel">
              <BackspaceOutlinedIcon className="icons" />
            </div>
          </div>
          <div className="result_box">
            <div className="search_list">
              {inputValue && InputFilter.length > 0 ? <SearchList /> : null}

              <div className="instructions">
                <div className="navigate">
                  <button disabled>
                    <ArrowUpwardIcon />
                  </button>
                  <button disabled>
                    <ArrowDownwardIcon />
                  </button>
                  <span>to navigate</span>
                </div>
                <div className="to_select">
                  <button disabled>
                    <KeyboardReturnIcon />
                  </button>
                  <p>to select</p>
                </div>
                <div className="to_close">
                  <button disabled>esc</button>
                  <p>to close</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </TextFieldStyle>
  );
};

export default TExtField;
