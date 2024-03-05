import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice';
import ProductCard from '../components/homePage/ProductCard';
import './styles/homePage.css';
import SelectCategory from '../components/homePage/SelectCategory'
import FormPrice from '../components/homePage/FormPrice';
//Llamo al dom para manipular la etiqueta body
const body = document.querySelector('body');

const HomePage = () => {


  //Estado para el formulario
  const [formValue, setFormValue] = useState({
    from:0,
    to: Infinity,
  });

  console.log(formValue)

  //Estado del select traido desde SelectCategory
  const [selectValue, setSelectValue] = useState(0);
  
  //Aqui creo la variable para llamar a products.slice.js desde el main
  const products =useSelector(store=>store.products);
  //console.log(products)

  //setter para el valor del textInput
  const [productName, setProductName] = useState('');

  //Variable para despachar
  const dispatch=useDispatch();
  useEffect(() => {

    //Costante con la url
    const url='https://e-commerce-api-v2.academlo.tech/api/v1/products';
   
    //Despacho la respuesta de la url
    dispatch(getProductsThunk(url));
  }, [])
  
  //Creo lña referencvia para el textInput
  const textInput=useRef();

  const handleSearch =()=>{
      setProductName(textInput.current.value.toLowerCase().trim()) ;
  }

  //Filtro para el textInput
  const cbFilter= (prod)=>{
    const {from, to}=formValue
    const ByName=prod.title.toLowerCase().includes(productName);
    const ByCategory=selectValue===0? true : prod.categoryId === +selectValue;
    const ByPrice = +prod.price> +from && +prod.price< +to;
    return ByName && ByCategory && ByPrice;

  }

  //console.log(selectValue)

    //console.log(productName)

    //Funcion para modo oscuro
    const handleDark=()=>{
        body.classList.toggle('dark')
    }
  return (
    <div>
      <div className='filtersContainer'>
        {/*Boton para modo oscuro*/}
        <button onClick={handleDark}>Dark Mode</button>

      <FormPrice
        setFormValue={setFormValue}
      />
      <div>
        <h3>By Name</h3>
        {/*Con Onchange hago que cada vez que cambie la variable textInput se ejecute*/}
        <input type="text" ref={textInput} onChange={handleSearch}/>
      </div>
      <SelectCategory
      setSelectValue={setSelectValue}
      />
     </div> 

      <section className='productsContainer'>
        {
          products?.filter(cbFilter).map(prod=>(
            <ProductCard
              key={prod.id}
              prod={prod}
            />
          ))
          }
      </section>
    </div>
  )
}

export default HomePage