import React, { useRef, useState, useEffect } from "react";
import { GlobalProduct } from "../../../context/ProductContext";
import { SearchListStyle } from "../../../components/Home/Search/SearchListStyle.styled";
import { useNavigate } from "react-router-dom";

const SearchList = () => {
  const { InputFilter } = GlobalProduct();
  const [activeIndex, setActiveIndex] = useState(0);
  const searchListRef = useRef(null);
  const navigate = useNavigate();

  //adding event handlers for keys
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((prevIndex) =>
          prevIndex < searchListRef.current.children.length - 1
            ? prevIndex + 1
            : prevIndex
        );
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      } else if (event.key === "Enter") {
        event.preventDefault();
        const selectedItem = InputFilter[activeIndex];
        if (selectedItem) {
          const id = selectedItem.id;
          navigate(`product/${id}`);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  // Scroll to bring the active item into view
  useEffect(() => {
    const container = searchListRef.current;
    const activeItem = container.children[activeIndex];
    if (activeItem) {
      const containerHeight = container.offsetHeight;
      const activeItemOffset = activeItem.offsetTop;
      const scrollTop =
        activeItemOffset - containerHeight + activeItem.offsetHeight;
      container.scrollTop = scrollTop;
    }
  }, [activeIndex]);

  return (
    <SearchListStyle>
      <div
        className="product_list scrollbar"
        id="scroll_style"
        ref={searchListRef}
      >
        {InputFilter.length > 0 &&
          InputFilter.map((val, index) => {
            return (
              <div
                key={index}
                className={
                  index === activeIndex ? "single-prod active" : "single-prod"
                }
                onClick={() => navigate(`/product/${val.id}`)}
              >
                <div className="product_img">
                  <img src={val.image} alt={val.title} className="small-logo" />
                </div>
                <div className="product_details">
                  <div className="product_name">{val.title}</div>
                  <div className="product_category">{val.category}</div>
                  <div className="product_price">{val.price}</div>
                </div>
              </div>
            );
          })}
      </div>
    </SearchListStyle>
  );
};

export default SearchList;
