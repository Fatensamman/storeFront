const initialState = {
    activeProduct: [],
    productList: [
        {
            name: '1TB USB',
            description: 'Crucial X8 1TB Portable SSD – Up to 1050MB/s – USB 3.2 – External Solid State Drive, USB-C, USB-A – CT1000X8SSD9',
            category: 'Electronics',
            inStock: 500,
            price: 70.00,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjm0EPGJYL2Df0bE1RhCcd4uZbluXdnZELus3J39GBvgEWaBmDVFYS9DoYvd46W7XvgNI&usqp=CAU'
        },
        {
            name: 'Monitor',
            description: 'HP Pavilion 22cwa 21.5-Inch Full HD 1080p IPS LED Monitor, Tilt, VGA and HDMI (T4Q59AA) - Black',
            category: 'Electronics',
            inStock: 10,
            price: 149.99,
            img: 'https://images.samsung.com/is/image/samsung/levant-led-monitor-s24f350fhm-ls24f350fhmxzn-frontblack-76804078?$720_576_PNG$'

        },
        {
            name: 'Mouse',
            description: 'Redragon M602 RGB Wired Gaming Mouse RGB Spectrum Backlit Ergonomic Mouse Griffin Programmable with 7 Backlight Modes up to 7200 DPI for Windows PC Gamers (Black)',
            category: 'Electronics',
            inStock: 200,
            price: 15.00,
            img: 'https://resource.logitechg.com/w_460,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_2.0/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-hero.png?v=1'

        },
        {
            name: 'Keyboard',
            description: 'FIODIO Membrane Gaming Keyboard, Wired RGB Rainbow Backlit Keyboard, Ergonomic Standard Keyboard for Desktop, Computer and PC, Silver-Black (FK-2028-US)',
            category: 'Electronics',
            inStock: 250,
            price: 20.00,
            img: 'https://static.cazasouq.com/image/cache/catalog/rzrhwhi-550x550w.jpg'

        },
        {
            name: 'TV',
            description: 'Insignia NS-39DF310NA21 39-inch Smart HD 720p TV - Fire TV Edition',
            category: 'Electronics',
            inStock: 20,
            price: 799.00,
            img: 'https://images.samsung.com/is/image/samsung/levant-uhd-tu8000-ua55tu8000uxtw-frontblack-229856496?$720_576_PNG$'
        },
        {
            name: 'Apples',
            description: 'Gala Apples Fresh Produce Fruit, 3 LB Bag',
            category: 'Food',
            inStock: 50,
            price: 1.00,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHf6Jyeaszdn-sJ6exsJSn5jqlzgrjTL9LuJWqy_fO7a-5pM5IZRYib0jQsMVZm-J_nc0&usqp=CAU'
        },
        {
            name: 'Calzones',
            description: 'Easy Calzones are stuffed full of pepperoni and mozzarella',
            category: 'Food',
            inStock: 20,
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
            return { ...state, activeProduct: products };
        default:
            return state;
    }
}

export function getProducts(category) {
    const products = initialState.productList;
    const filtered = products.filter(product => product.category === category);
    return filtered;
}
export default productReducer;