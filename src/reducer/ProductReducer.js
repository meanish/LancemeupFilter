const reducer = (state, action) => {
  switch (action.type) {
    case "GetAllProducts": {
      const { data } = action.payload;
      return {
        ...state,
        AllProduct: data,
        FilterProduct: data,
      };
    }

    //input search filter
    case "InputSearchFilter": {
      const { val } = action.payload;
      let { AllProduct } = state;
      let tempProducts = [...AllProduct];

      if (val) {
        tempProducts = tempProducts.filter((currEle) => {
          const lowerCaseVal = val.toLowerCase();
          const lowerCaseTitle = currEle.title.toLowerCase(); //case sensitive
          return lowerCaseTitle.includes(lowerCaseVal); //includes can be startswith,endwith
        });
      }

      return {
        ...state,
        InputFilter: tempProducts,
      };
    }
    case "ClearInputFilter": {
      return {
        ...state,
        InputFilter: [],
      };
    }
    
    //serachbar ma user ko value change vayesi state change huney
    case "Update_FilterValue":
      const { name, value } = action.payload; //category : men's clothing
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    //Searchbar change ma update Api calling
    case "Search_Filter":
      let { AllProduct } = state;
      let tempProducts = [...AllProduct];

      const { category, price } = state.filters;

      if (category && category !== "All") {
        tempProducts = tempProducts.filter(
          (currEle) => currEle.category === category
        );
      }

      if (price && price !== 0) {
        tempProducts = tempProducts.filter((currEle) => currEle.price <= price);
      }

      return {
        ...state,
        FilterProduct: tempProducts,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
          text: "",
          category: "All",
          price: "",
        },
        filterInput: {
          text: "",
          category: "",
          price: "",
        },
        InputFilter: [],
      };

    default:
      return state;
  }
};

export default reducer;
