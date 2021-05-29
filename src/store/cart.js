const initialState = {
  cart: [],
  visible: false,
  cartNum: []
}

export default function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      if (!state.cart.includes(payload)) {
        return { ...state, cartNum: [...state.cartNum, payload], cart: [...state.cart, payload], inStock: payload.inStock-- };
      }
      else {
        return { ...state, cartNum: [...state.cartNum, payload], cart: [...state.cart], inStock: payload.inStock-- };
      }
    case 'REMOVE_FROM_CART':
      const cart = [...state.cart];
      const cartNum = [...state.cartNum];
      let deleteOne = true;
      const newCart = cart.filter((item) => {
        if (item === payload && deleteOne) {
          deleteOne = false;
          item.inStock = item.count;
          console.log('iteeeeeeeeeeeeeem', item);
          return false;
        } else {
          return true;
        }
      })
      const newCartNum = cartNum.filter((item) => {
        if (item === payload ) {
          item.inStock = item.count;
          return false;
        } else {
          return true;
        }
    })
      return { ...state, cart: [...newCart],cartNum:[...newCartNum] };
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
export function removeFromCart(product) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  }
}