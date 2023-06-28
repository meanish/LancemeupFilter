import styled from "styled-components";

export const FilterbarStyle = styled.div`
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.nav};
    box-shadow: rgba(102, 102, 104, 0.6) 3px 3px 10px;
    position: fixed;
    top: 0;
    z-index: 999;
  }
  .product_input,
  .custom_filter {
    padding: 0 1rem;
    flex-basis: 40%;
  }

  .company_logo {
    flex-basis: 20%;
    .logo {
      display: flex;
      justify-content: center;
    }
  }
  .custom_filter {
    display: flex;
    justify-content: space-between;
  }
  .clear_filter {
    display: flex;
    align-items: center;
    .clearIcon {
      height: 3rem;
    }
  }
`;
