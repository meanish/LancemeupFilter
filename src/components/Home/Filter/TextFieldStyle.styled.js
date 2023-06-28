import styled from "styled-components";

export const TextFieldStyle = styled.div`
  display: flex;
  align-items: center;

  .Search_btn {
    padding: 1rem 5px;
    background-color: rgba(25, 118, 210, 0.04);
    border-radius: 08px;
    width: 14rem;
    color: ${({ theme }) => theme.colors.icons};
    font-size: 15px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    .search_text {
      margin: 0 0.5rem;
    }
    .ctrl_btn {
      font-size: 07px;
      border: 1px dotted ${({ theme }) => theme.colors.icons};
      padding: 2px;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.icons};
      font-weight: bold;
    }
  }

  .icons {
    font-size: 24px;
  }

  .search_pop {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    .search_field {
      display: flex;
      width: 30rem;
      align-items: center;
      padding: 0.5rem 5px;
      background-color: rgba(25, 118, 210, 0.04);
      border: 1px solid ${({ theme }) => theme.colors.border};
      position: relative;
      .text_field {
        outline: none;
        border: none;
        background-color: none;
        padding: 1rem 0.2rem;
        background-color: rgba(25, 118, 210, 0.001);
        width: 30rem;
        margin: 0 0.5rem;
      }
    }
    .result_box {
      position: absolute;
      bottom: -0;
      left: 0;
      width: 100%;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1rem;
    }
    .search_list {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%; /* Position it below the search field */
      left: 0;
      width: 100%;
      border-radius: 0 0 08px 08px;
      background-color: ${({ theme }) => theme.colors.white};
      max-height: 200px; /* Adjust the max height of the list */
      .nofound {
        text-align: center;
        font-weight: bolder;
        color: red;
      }
    }
    .instructions {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 10px;
      border-radius: 2px;
      color: ${({ theme }) => theme.colors.icons};
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px dotted ${({ theme }) => theme.colors.icons};
      font-weight: bold;
      width: 32rem;
      .navigate,
      .to_select,
      .to_close {
        display: flex;
        align-items: center;
        gap: 2px;
      }
      button {
        max-height: 25px;
      }
    }
  }
`;
