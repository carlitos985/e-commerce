import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import ProductCard from '../homePage/ProductCard'


const similarItems = ({categoryId, prodId}) => {
    //console.log(categoryId)

    const[productsByCategory, setProductsByCategory ]=useFetch()

    useEffect(() => {
        if(categoryId){
            const url=`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${categoryId}`;

           setProductsByCategory(url);

        }
    }, [categoryId])
    
    console.log(productsByCategory);

    const cbFilter=(prod)=>{
        return prod.id !== +prodId
    }

    
    

  return (
    <section>
        <h2>Discover Similar Items</h2>
        <div className='productsContainer'>
            {
                productsByCategory?.filter(cbFilter).map(prod=>(
                    <ProductCard
                    key={prod.id}
                    prod={prod}
                    />
                ))
            }
        </div>    
    </section>
  )
  }
    


export default similarItems