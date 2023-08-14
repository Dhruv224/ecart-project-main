const productReducer = (state, action) => {
    if(action.type === 'SET_API_LOADING'){
        return{
            ...state, isLoading: true
        }
    }

    if(action.type === "SET_ERROR"){
        return{
            ...state, isLoading: false, isError: true
        }
    }

    if(action.type === 'SET_API_DATA'){
        return{
            ...state, 
            isLoading: false, 
            isError: false, 
            products: action.payload, 
            featureProducts: action.payload.filter((ele) => {
                return ele.featured === true;
            }) 
        }
    }

    if(action.type === 'SET_SINGLE_PRODUCT_LOADING'){
        return{
            ...state,
            isSingleProductLoading: true
        }
    }

    if(action.type === 'SET_SINGLE_PRODUCT_DATA'){
        return{
            ...state,
            isSingleProductLoading: false,
            singleProduct: action.payload
        }
    }

    if(action.type === 'SET_SINGLE_PRODUCT_ERROR'){
        return{
            ...state,
            isSingleProductError: true
        }
    }

    return state;
}

export default productReducer;