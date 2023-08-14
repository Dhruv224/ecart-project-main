import axios from 'axios';
import {createContext, useContext, useEffect, useReducer} from 'react';
import productReducer from '../reducer/productReducer';

const AppContext = createContext();

const URL = 'https://api.pujakaitem.com/api/products';

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleProductLoading: false,
    isSingleProductError: false,
    singleProduct: {},
}
 
const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(productReducer, initialState);

    //Fetching the All Products from URL/API
    const getUrlDataOfProducts = async (URL) => {
        dispatch({type: "SET_API_LOADING"});
        try{
            let res = await axios.get(URL);
            let products = await res.data;
            dispatch({type: "SET_API_DATA", payload: products});
        }catch(error){
            dispatch({type: "SET_API_ERROR"});
        }
    }
    useEffect(() => {
        getUrlDataOfProducts(URL);
    }, []);


    //Fetching Single Product from URL/API
    const getDataOfSingleProduct = async (uri) => {
        dispatch({type: "SET_SINGLE_PRODUCT_LOADING"});
        try{
            let res = await axios.get(uri);
            let singleProductData = await res.data;
            dispatch({type: "SET_SINGLE_PRODUCT_DATA", payload: singleProductData});
        }catch(err){
            dispatch({type: "SET_SINGLE_PRODUCT_ERROR"});
        }
    }
    

    return(
        <AppContext.Provider value={{...state, getDataOfSingleProduct}}>
            {children}
        </AppContext.Provider>
    )
}

const useMyCustomContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useMyCustomContext}