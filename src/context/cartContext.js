import { useEffect } from "react";
import { useContext, createContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getAndSetLocalStorageData = () => {
    let localStorageData = localStorage.getItem('EcartLocalStorage');
    if(localStorageData == null){
        return [];
    } 
    else{
        return JSON.parse(localStorageData);
    }
}

const initialState = {
    cart: getAndSetLocalStorageData(),
    subTotal: 0,
    shipping: 5000
}

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart  = (id, color, qty, product) => {
        dispatch({type: "ADD_TO_CART", payload: {id, color, qty, product}});
    }

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id});
    }

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"});
    }

    const increamentQty = (id) => {
        dispatch({type: "INCREAMENT_QTY", payload: id});
    }

    const decreamentQty = (id) => {
        dispatch({type: "DECREAMENT_QTY", payload: id});
    }
 
    useEffect(() => {
        dispatch({type: "SUBTOTAL"});
        localStorage.setItem('EcartLocalStorage', JSON.stringify(state.cart));
    }, [state.cart]);

    return (<CartContext.Provider value={{...state, addToCart, removeItem, clearCart, increamentQty, decreamentQty}}>
        {children}
    </CartContext.Provider>)
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { useCartContext, CartProvider };