import styled from "styled-components";

export const SingleProductStyle = styled.div`
  .product {
    min-height: 70vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 100rem;
    padding: 9.8rem 0;
  }
  .product-data {
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #ffffff;
    h2 {
      text-transform: capitalize;
      font-size: 25px;
      color: ${({ theme }) => theme.colors.btn};
      text-align: center;
      margin-top: 1.5rem;
    }
    .category {
      font-size: 12px;
      margin: 2rem 2rem;
      span {
        font-size: 15px;
        color: ${({ theme }) => theme.colors.footer_bg};
        text-transform: capitalize;
        font-weight: bolder;
      }
    }
  }
  .product-card {
    display: flex;
    justify-content: center;
    align-items: center;
    .flex {
      display: flex;
      margin: 4rem 0;
      align-items: center;

      .title {
        font-size: 15px;
        font-weight: bolder;
        margin-right: 2rem;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #ccc;
      padding-bottom: 2rem;
      margin: 3rem 0;


      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product_description {
      flex-basis: 60%;
      padding: 0 5rem;

      .description_text {
        font-size: 1rem;
      }
    }
    .product-img {
      flex-basis: 40%;
      padding-left: 1rem;
      img {
        height: 28rem;
      }
    }
    .product-data-price {
      font-weight: bolder;
      font-size: 20px;
      color: green;
    }
  }

  .product-data-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
      font-weight: bold;
    }
  }
`;
