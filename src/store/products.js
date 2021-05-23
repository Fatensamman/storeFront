const initialState = {
    activeProduct: '',
    productList: [
        {
            name: '1TB USB',
            category: 'Electronics',
            price: 70.00,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjm0EPGJYL2Df0bE1RhCcd4uZbluXdnZELus3J39GBvgEWaBmDVFYS9DoYvd46W7XvgNI&usqp=CAU'
        },
        {
            name: 'Monitor',
            category: 'Electronics',
            price: 149.99,
            img: 'https://images.samsung.com/is/image/samsung/levant-led-monitor-s24f350fhm-ls24f350fhmxzn-frontblack-76804078?$720_576_PNG$'

        },
        {
            name: 'Mouse',
            category: 'Electronics',
            price: 15.00,
            img: 'https://resource.logitechg.com/w_460,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_2.0/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-hero.png?v=1'

        },
        {
            name: 'Keyboard',
            category: 'Electronics',
            price: 20.00,
            img: 'https://static.cazasouq.com/image/cache/catalog/rzrhwhi-550x550w.jpg'

        },
        {
            name: 'TV',
            category: 'Electronics',
            price: 799.00,
            img: 'https://images.samsung.com/is/image/samsung/levant-uhd-tu8000-ua55tu8000uxtw-frontblack-229856496?$720_576_PNG$'
        },
        {
            name: 'Apples',
            category: 'Food',
            price: 1.00 ,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHf6Jyeaszdn-sJ6exsJSn5jqlzgrjTL9LuJWqy_fO7a-5pM5IZRYib0jQsMVZm-J_nc0&usqp=CAU'
        },
        {
            name: 'Calzones',
            category: 'Food',
            price: 4.00,
            img: 'https://images-gmi-pmc.edge-generalmills.com/9df0ff18-e881-4221-ac91-710b37668b03.jpg',
        },
    ]
}

const productReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ACTIVE':
            const products = getProducts(payload.category);
            return { ...state, products: products };
        default:
            const products2 = getProducts('Food');
            return { ...state, products: products2 };    }
}

export function getProducts(category) {
    const products = initialState.productList;
    const filtered = products.filter(product => product.category === category);
    return filtered;
}
export default productReducer;