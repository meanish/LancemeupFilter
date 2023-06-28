import { React, createContext, useEffect, useContext, useReducer } from "react";
import reducer from "../reducer/ProductReducer";
import axios from "axios";

export const ProductValue = createContext();

const initialState = {
  AllProduct: [],
  selectedProduct: "",
  FilterProduct: [],
  InputFilter: [],
  filters: {
    category: "All",
    price: "",
    clear: "",
  },
  priceRange: [
    { label: "20" },
    { label: "50" },
    { label: "60" },
    { label: "100" },
    { label: "200" },
    { label: "500" },
    { label: "1000" },
  ],
  open: false,
  filterInput: {
    text: "",
    category: "",
    price: "",
  },
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const GetProduct = async () => {
      try {
        const result = await axios.get("https://fakestoreapi.com/products");
        const data = await result.data;
        dispatch({ type: "GetAllProducts", payload: { data } });
      } catch (e) {
        console.log(e);
      }
    };
    GetProduct();
  }, []);

 

  //Filter by searchbar and choosing option triggered on Update-FilterValue
  useEffect(() => {
    dispatch({ type: "Search_Filter" });
  }, [state.AllProduct, state.filters]);

  //searchbar change on user type value of the default name={text} //handles category and price
  const UpdateFilterSearch = (name, value) => {
    return dispatch({ type: "Update_FilterValue", payload: { name, value } });
  };

  //input Seacrch Filter
  const InputSearchFilter = (val) => {
    return dispatch({ type: "InputSearchFilter", payload: { val } });
  };

  const ClearInputFilter = (val) => {
    return dispatch({ type: "ClearInputFilter" });
  };

  //To claer all ther filters are
  const clearFilter = () => {
    return dispatch({ type: "CLEAR_FILTER" });
  };

  return (
    <ProductValue.Provider
      value={{
        ...state,
        UpdateFilterSearch,
        clearFilter,
        InputSearchFilter,
        ClearInputFilter,
      }}
    >
      {children}
    </ProductValue.Provider>
  );
};

export const GlobalProduct = () => {
  return useContext(ProductValue);
};

export default ProductProvider;
