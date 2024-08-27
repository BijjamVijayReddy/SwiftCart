import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AppRoutes from './appRoutes/AppRoutes';
import { fetchApi } from './store/productActions';


function App() {
  
  const { products, loading, error } = useSelector((state) => state.products);
  // const { cartItems } = useSelector((state) => state.cartItems);
  // console.log("CartItems", JSON.stringify(products));
  // console.log("isLoading", loading);
  // console.log("err", error)

  

  return (
    <div >
      <AppRoutes />
    </div>
  );
}

export default App;
