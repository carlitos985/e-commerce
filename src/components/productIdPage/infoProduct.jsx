import React, { useState } from 'react'

const infoProduct = ({productId}) => {

    //console.log(productId)

    const [quantity, setQuantity]=useState(0);

    const handlePluss=()=>{
        
        setQuantity(quantity+1)
    }

    const handleLess=()=>{
        if(quantity>1){

            setQuantity(quantity-1)
        }
    }

  return (
    <div>
        <div>
            <h2>{productId?.brand}</h2>
            <h3>{productId?.title}</h3>
            <p>{productId?.description}</p>
        </div>

        <div>
            <ul>
                <li>Price</li>
                <li>$ {productId?.price}</li>
            </ul>
            <div>
                <p>Quantity</p>
                <button onClick={handleLess}>-</button>
                <span>{quantity}</span>
                <button onClick={handlePluss}>+</button>
            </div>
        </div>
        <button>Add to Car</button>
        
    </div>
    
  )
}

export default infoProduct;