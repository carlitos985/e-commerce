import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import getToken from "../../utils/getToken";
const urlBase='https://e-commerce-api-v2.academlo.tech/api/v1/cart';

const cartSlice= createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(currentValue,action)=> [...currentValue, action.payload],

        deleteFromCart:(currentValue,action)=>{
            currentValue.filter(prod=>(
                 prod.id!==action.payload
            ));
        },

        setCart: (currentValue, action)=>action.payload,

        updateCart:(currentValue,action)=>{
            /*Desesctructuro cation.payload que contiene todo el elmento */
            const{id,quantity}=action.payload;
            currentValue.map((prod)=>(
                prod.id===id ? prod.quantity=quantity : prod
            ))
        },
    }
});
export  const{setCart}= cartSlice.actions

export default cartSlice.reducer;
export const getCartThunk = ()=>(dispatch)=>{
    /*getToken viene desde la carpeta utils/getToken.js y retorna el token de localstorage*/
    axios.get(urlBase,getToken())
        .then(res=>setCart(res.data))
        .catch(err=> console.log(err));

}

export const postCartThunk= ()=>()=>{
    axios.post(urlBase, data, getToken())
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err));
}