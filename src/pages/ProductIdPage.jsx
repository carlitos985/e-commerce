import React, { useEffect } from 'react'
import InfoProduct from '../components/productIdPage/infoProduct.jsx'
import useFetch from '../hooks/useFetch.js'
import { useParams } from 'react-router-dom';
import SimilarItems from '../components/productIdPage/similarItems.jsx'
import SliderImages from '../components/SliderImages.jsx';

const ProductIdPage = ({categoryId}) => {

  //Este useFectych lo creo en carpeta components/hook/useFetch.jsx y con este llamo ña finmcion para llamar al url
  const [productId, getProductId]=useFetch();

  //Gracias a la ruta definida en App.jsx /product/:id useParams accede al valor dinamico de la url
  const param=useParams();

  useEffect(() => {
    const url=`https://e-commerce-api-v2.academlo.tech/api/v1/products/${param.id}`
    getProductId(url)
  }, [param])
  
  //console.log(productId)
  return (
    <div>
      <h2>idProduct</h2>
      <SliderImages 
        images={productId?.images}
      />
      <InfoProduct 
      productId={productId}
      />

      <SimilarItems
        categoryId={productId?.categoryId}
        prodId={param.id}

      />
    </div>
  )
}

export default ProductIdPage