import styled from "styled-components";

export const SearchListStyle = styled.div`
  .product_list {
    .active {
      background-color: ${({ theme }) => theme.colors.yellow};
      box-shadow: 24px 24px 48px #d9d9d9, -24px -24px 48px #ffffff;
    }
  }

  //acrollbar edit
  .scrollbar {
    float: left;
    max-height: 20rem;
    width: 32rem;
    background: #f5f5f5;
    overflow-y: scroll;
    .single-prod {
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 0;

      .product_details {
        padding: 0 1rem;
        color: ${({ theme }) => theme.colors.heading};
      }
    }
  }

  #scroll_style::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  #scroll_style::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  #scroll_style::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.colors.icons};
  }
`;
