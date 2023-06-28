import styled from "styled-components";

export const ProductStyle = styled.div`

  padding: 8rem 4rem;

  .product-details {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    .product_head {
      font-size: 19px;
      font-weight: bolder;
    }
    span {
      font-size: 19px;
      font-weight: bolder;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
  .card {
    overflow: hidden;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0;
    transform: scale(0.95);
    transition: box-shadow 0.5s, transform 0.5s;
    position: relative;
    background-color: rgb(246, 248, 250);

    figure {
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      transition: all 0.5s linear;
      background-color: #fff;
      border: 1px solid rgb(246, 248, 250);

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        transition: all 0.2s linear;
        cursor: pointer;
      }
      &:hover::after {
        width: 100%;
      }
      &:hover img {
        transform: scale(1.1);
      }
      img {
        max-width: 80%;
        margin-top: 1.5rem;
        height: 15rem;
        transition: all 0.2s linear;
      }
    }
    .caption {
      opacity: 0;
    }
    &:hover {
      transform: scale(1);
      box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);

      .caption {
        z-index: 999999;
        background-color: transparent;
        opacity: 1;
        top: 20px;
        right: 0;
        position: absolute;
      }
    }
    .card-data {
      padding: 0 2rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;
