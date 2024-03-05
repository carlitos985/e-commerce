import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice.js';
import cart from "./slices/cart.slice.js";

const store = configureStore(
    {
        reducer:{
            //Lo importo y lo traigo del slice products.slice.js y lo envio almprovider del main
            products,
            cart,
        }
    }
);


export default store