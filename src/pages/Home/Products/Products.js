import React, { useState, useEffect } from "react";
import { GlobalProduct } from "../../../context/ProductContext";
import { ProductStyle } from "../../../components/Home/Product/Product.styled";
import FormatPrice from "../../../Helper/FormatPrice";
import { NavLink } from "react-router-dom";

const Products = () => {
  const { FilterProduct } = GlobalProduct();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <ProductStyle>
      <div className="products_list container">
        <div className="product-details">
          <div className="product_head">Available Products:</div>
          <div className="product_count">
            Product Counts:<span>{FilterProduct.length}</span>
          </div>
        </div>
        <div className="grid grid-four-column">
          {isLoading ? (
            <p className="loader">Loading...</p>
          ) : (
            <>
              {FilterProduct.length > 0 ? (
                <>
                  {FilterProduct.map((val, index) => {
                    return (
                      <NavLink
                        key={index}
                        className="card"
                        to={`/product/${val.id}`}
                      >
                        <figure>
                          <img src={val.image} alt={val.title} />
                        </figure>

                        <div className="card-data">
                          <div className="card-data-flex">
                            <h3>{val.title}</h3>
                            <p className="card-data--price">
                              <FormatPrice price={val.price} />
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    );
                  })}
                </>
              ) : (
                <p>No available products</p>
              )}
            </>
          )}
        </div>
      </div>
    </ProductStyle>
  );
};

export default Products;
