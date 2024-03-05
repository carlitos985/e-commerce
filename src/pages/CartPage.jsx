import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartThunk } from '../store/slices/cart.slice';


const CartPage = () => {

const cart=useSelector(store => store.cart);

const dispatch= useDispatch();

/*Llamo a getCartThunk de cartSlice*/
useEffect(() => {
  dispatch(getCartThunk());
}, []);


console.log(cart);
  return (
    <div>CartPage</div>
  )
}

export default CartPage;