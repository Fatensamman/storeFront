import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './products.js';
import categoryReducer from './categories.js';
import cartReducer from './cart.js';
import thunk from 'redux-thunk';

const reducers = combineReducers({ categories: categoryReducer, products: productReducer, cart: cartReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();