import axios from 'axios';

const initialState = {
    activeProduct: [],
    productList: [],
    count: 0,
    products: [],

}

const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "LOAD_PRODUCTS":
            return {
                count: payload.count,
                productList: payload.results,
            }
        case 'ACTIVE':
            const products = getProducts(payload.category, state);
            let m = products.map(product => {
                product.count = product.inStock
                return product;
            })
            console.log('paaaaaaaaaaaaaaaylooooooooooooooooad', m)
            return { ...state, activeProduct: m };
        default:
            return state;
    }
}

export function getProducts(category, state) {
    const products = state.productList;
    const filtered = products.filter(product => product.category === category);
    return filtered;
}

export const loadProducts = () => (dispatch, getState) => {
    return axios.get('https://api-js401.herokuapp.com/api/v1/products')
        .then(res => {
            dispatch({
                type: 'LOAD_PRODUCTS',
                payload: res.data
            });
        });
}

export default productReducer;