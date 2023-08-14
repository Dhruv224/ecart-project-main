import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/filterReducer";
import { useMyCustomContext } from "./productContext";

const FilterContext = createContext();

const initialState = {
    filterProduct: [],
    allFilterProduct: [],
    gridView: false,
    sortingValue: "selectany", 
    filters:{
        text: "",
        category: "All",
        company: "All",
        color: "All",
        maxPrice: 0,
        price: 0,
        minPrice: 0
    }
}

export const FilterContextProvider = ({ children }) => {
    const {products} = useMyCustomContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const gridViewTrue = () => {
        return dispatch({type: "GRIDVIEW_TRUE"});
    }

    const gridViewFalse = () => {
        return dispatch({type: "GRIDVIEW_FALSE"});
    }

    const sorting = (e) => {
        // const val = e.target.value;
        dispatch({type: "GET_SORT_VALUE", payload: e.target.value})
    }

    const searchAndUpdate = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        dispatch({type: "SEARCH_AND_UPDATE", payload: {name, value}})
    }

    const clearFilters = () => {
        dispatch({type: "CLEAR_FILTERS"})
    }

    useEffect(() => {
        dispatch({type: "SEARCH_UPDATE_PRODUCT"});
    }, [state.filters]);
    
    useEffect(() => {
        dispatch({type: "SORTING_FILTER_PRODUCTS", payload: products})
    }, [products, state.sortingValue]);  

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products});
      }, [products]);

    return (
        <FilterContext.Provider value={{...state, gridViewFalse, gridViewTrue, sorting, searchAndUpdate, clearFilters}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}