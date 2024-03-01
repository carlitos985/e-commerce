import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice=createSlice(
    {
        name: 'products',
        //null para que la propiedad no tenga valor y despues se llene el contenido
        //La propiedad initialState no puede tener valor undefined
        initialState:null,
        reducers:{
            //payload sirve para recibir lo mque le pasemos a setProducts cuando la llamamos
            setProducts:(currentValue,action)=>action.payload,
            
        }

    }
);

export const {setProducts}=productsSlice.actions

export default productsSlice.reducer;

//Aquí con reduxThunk hago una peticion asíncrona para enviarla al HomePage.jsx
export const getProductsThunk=(url)=> (dispatch)=>{
    axios.get(url)
        .then(res=>dispatch(setProducts(res.data)))
        .catch(err=>console.log(err))
}