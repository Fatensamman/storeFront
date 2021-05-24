import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './products.js';
import categoryReducer from './categories.js';
import cartReducer from './cart.js';

const reducers = combineReducers({ categories: categoryReducer, products: productReducer, cart: cartReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();