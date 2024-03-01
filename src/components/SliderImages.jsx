import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './productIdPage/Styles/Sliderimages.css'

const SliderImages = ({images}) => {
  return (
    
    <Splide
        options={ {
            rewind: true,
            gap   : '1rem',
            } }
            aria-label="My Favorite Images"
        >
        {
            images?.map(item=>(
                <SplideSlide key={item.url}>
                    <img src={item.url} alt={`Imagen${item.id}`}/>
                </SplideSlide>
            ))
        }
    </Splide>
    
  )
}

export default SliderImages