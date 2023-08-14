const filterReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_FILTER_PRODUCTS':

            let priceArr = action.payload.map((currEle) => {
                return currEle.price
            });

            const maxPrice = Math.max(...priceArr);
            const minPrice = Math.min(...priceArr);
            return {
                ...state,
                filterProduct: [...action.payload],
                allFilterProduct: [...action.payload],
                filters: {...state.filters, maxPrice: maxPrice, price: maxPrice, minPrice: minPrice}
            }
            
        case 'GRIDVIEW_TRUE':
            return{
                ...state, 
                gridView: true
            } 
            
        case 'GRIDVIEW_FALSE':
            return{
                ...state, 
                gridView: false
            } 
        
        case "GET_SORT_VALUE":
            return{
                ...state,
                sortingValue: action.payload
            }

        case "SORTING_FILTER_PRODUCTS":
            let sortFilterProducts;
            let tempProducts = [...action.payload];

            if(state.sortingValue === 'ltoh'){
                sortFilterProducts = tempProducts.sort((first, second) => {
                    return first.price - second.price;
                })
            }

            if(state.sortingValue === 'htol'){
                sortFilterProducts = tempProducts.sort((first, second) => {
                    return second.price - first.price;
                })
            }

            if(state.sortingValue === 'atoz'){
                sortFilterProducts = tempProducts.sort((first, second) => {
                    return first.name.localeCompare(second.name);
                })
            }

            if(state.sortingValue === 'ztoa'){
                sortFilterProducts = tempProducts.sort((first, second) => {
                    return second.name.localeCompare(first.name);
                })
            }
            return{
                ...state,
                filterProduct:sortFilterProducts
            }

        case "SEARCH_AND_UPDATE":
            const {name, value} = action.payload;
            return{
                ...state,
                filters:{
                    ...state.filters,
                    [name]: value
                },
            }

        case "SEARCH_UPDATE_PRODUCT":

            let {allFilterProduct} = state;
            let temp = [...allFilterProduct];

            const {text, category, company, color, price} = state.filters;
            if(text){
                temp = temp.filter((currEle) => {
                    return currEle.name.toLowerCase().includes(text);
                })
            }
            if(category !== "All"){
                temp = temp.filter((currEle) => {
                    return currEle.category === category;
                })
            }
            if(company !== "All"){
                temp = temp.filter((currEle) => {
                    return currEle.company.toLowerCase() === company.toLowerCase();
                })
            }
            if(color !== "All"){
                temp = temp.filter((currEle) => {
                    return currEle.colors.includes(color);
                })
            }
            if(price){
                temp = temp.filter((currEle) => {
                    return currEle.price <= price;
                })
            }
            return{
                ...state,
                filterProduct: temp
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    text: "",
                    category: "All",
                    company: "All",
                    color: "All",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.minPrice
                }
            }
        default:
            return state;
    }
}

export default filterReducer;