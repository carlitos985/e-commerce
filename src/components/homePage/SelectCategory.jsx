import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch';

const selectCategory = ({setSelectValue}) => {

  
  const [categories, getCategories]=useFetch();
  
  useEffect(() => {
    const url='https://e-commerce-api-v2.academlo.tech/api/v1/categories';
    getCategories(url)
   
  }, [])


  const textSelect=useRef();
  
  //console.log(categories)

  const handleCategory= ()=>{
      console.log(textSelect.current.value);
      setSelectValue(textSelect.current.value);
  }
  return (
    <select onChange={handleCategory} ref={textSelect}>
      <option value={0}>all</option>
      {
        categories?.map(category=>(
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))
      }
    </select>
  )
}

export default selectCategory