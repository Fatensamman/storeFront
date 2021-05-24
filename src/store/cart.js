const initialState = {
  cart: [],
  visible: false
}

export default function cartReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      // console.log('before',payload)
      // // payload.inStock--;
      // console.log('',payload)

      return { ...state, cart: [...state.cart, payload], inStock: payload.inStock-- };
    default:
      return state;
  }
}

export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}