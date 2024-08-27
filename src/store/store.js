// src/store/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import cartReducer from './cartReducer';
import productReducer from './productReducer ';


const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

export default store;
