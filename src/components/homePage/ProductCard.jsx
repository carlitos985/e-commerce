import React from 'react'
import './styles/productCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({prod}) => {
    //COmpruebo que estoy recibuendo prod
    //console.log(prod)

    //Para conectar a la HomePage.jsx
    const navigate= useNavigate();

    //Funcion para el boton
    const handleView=()=>{
        //a la funcion navigate le paso la ruta dada en app.jsx de ProductIdPage
        navigate(`/product/${prod.id}`);
    }
  return (
    <article className='productCard'>
        <figure className='productCard_img'>
           <img src={prod.images[0].url} alt="product image" />
           <img src={prod.images[1].url} alt="product image" />
        </figure>
        <div>
            <ul>
                <li><span>{prod.brand}</span><span>{prod.brand}</span></li>
                <li><span>Price: </span><span>${prod.price}</span></li>
            </ul>
        </div>

        <div className='productButtons'>
            <button>Add to car</button>
            <button onClick={handleView}>View more...</button>
        </div>
    </article>
    
  )
  }

export default ProductCard