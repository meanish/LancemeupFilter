import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalProduct } from "../../context/ProductContext";
import Filterbar from "../Home/Filterbar";
import StarRating from "../../Helper/StarRating";
import FormatPrice from "../../Helper/FormatPrice";
import { SingleProductStyle } from "../../components/SingleProduct/SingleProductStyle.styled";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import UndoIcon from "@mui/icons-material/Undo";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SecurityIcon from "@mui/icons-material/Security";

const SingleProduct = () => {
  const { AllProduct } = GlobalProduct();
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const filterProduct = AllProduct.filter((currEle) => {
      return parseInt(currEle.id) === parseInt(id);
    });
    setProductDetails(filterProduct);
  }, [AllProduct, id]);

  return (
    <SingleProductStyle>
      <Filterbar />
      <div className="product container">
        {productDetails &&
          productDetails.map((val, index) => {
            const { title, rating, description, price, image, category } = val;
            return (
              <div key={id}>
                <div className="product-data">
                  <h2>{title}</h2>
                  <div className="category">
                    Category: <span>{category}</span>
                  </div>
                  <div className="product-card ">
                    <div className="product-img">
                      <img src={image} alt={title} />
                    </div>
                    <div className="product_description">
                      <div className="flex">
                        <div className="title">Description:</div>
                        <p className="description_text">{description}</p>
                      </div>
                      <div className="flex">
                        <div className="title">Rating:</div>
                        <StarRating
                          stars={rating.rate}
                          reviews={rating.count}
                        />
                      </div>
                      <div className="flex">
                        <div className="title">Price:</div>
                        <p className="product-data-price">
                          <FormatPrice price={price} />
                        </p>
                      </div>
                      <div className="product-data-warranty">
                        <div className="product-warranty-data">
                          <ElectricBoltIcon className="warranty-icon" />
                          <p>Free Delivery</p>
                        </div>

                        <div className="product-warranty-data">
                          <UndoIcon className="warranty-icon" />
                          <p>30 Days Replacement</p>
                        </div>

                        <div className="product-warranty-data">
                          <LocalShippingIcon className="warranty-icon" />
                          <p>Delivered </p>
                        </div>

                        <div className="product-warranty-data">
                          <SecurityIcon className="warranty-icon" />
                          <p>2 Year Warranty </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </SingleProductStyle>
  );
};
export default SingleProduct;
