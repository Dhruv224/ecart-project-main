const cartReducer = (state,action) => {
    if(action.type === 'ADD_TO_CART'){
        let {id, color, qty, product} = action.payload;

        let isProductExist = state.cart.find((currEle) => {
            return currEle.id === id + color;
        });

        if(isProductExist){
            let updatedCart = state.cart.map((currEle) => {
                if(currEle.id === id + color){
                    let newQty = currEle.qty + qty;

                    if(newQty >= currEle.max){
                        newQty = currEle.max;
                    }
                    return{
                        ...currEle,
                        qty: newQty
                    }
                }
                else{
                    return currEle;
                }
            });

            return {
                ...state,
                cart: updatedCart
            }
        }
        else{
            let newCartProduct = {
                id: id + color,
                name: product.name,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
                color,
                qty
            }

            return {
                ...state,
                cart: [...state.cart, newCartProduct]
            }
        }
    }

    if(action.type === "REMOVE_ITEM"){
        let newCartData = state.cart.filter((currEle) => {
            return currEle.id !== action.payload;
        });

        return {
            ...state,
            cart: newCartData
        }
    }

    if(action.type === "CLEAR_CART"){
        return {
            ...state,
            cart: []
        }
    }

    if(action.type === "INCREAMENT_QTY"){
        let updatedCart = state.cart.map((currEle) => {
            if(currEle.id === action.payload){
                let newQty = currEle.qty + 1;

                if(newQty >= currEle.max){
                    newQty = currEle.max;
                }
                return{
                    ...currEle,
                    qty: newQty
                }
            }
            else{
                return currEle;
            }
        });

        return {
            ...state,
            cart: updatedCart
        }
    }

    if(action.type === "DECREAMENT_QTY"){
        let updatedCart = state.cart.map((currEle) => {
            if(currEle.id === action.payload){
                let newQty = currEle.qty - 1;

                if(newQty <= 1){
                    newQty = 1;
                }
                return{
                    ...currEle,
                    qty: newQty
                }
            }
            else{
                return currEle;
            }
        });

        return {
            ...state,
            cart: updatedCart
        }
    }

    if(action.type === "SUBTOTAL"){
        let updatedSubTotal = state.cart.reduce((acc, currEle) => {
            console.log(currEle)
            let {qty, price} = currEle;
            acc = acc + qty * price;
            return acc;
        }, 0);

        return{
            ...state,
            subTotal: updatedSubTotal
        }
    }

    return state;
}

export default cartReducer