import React from 'react'
import './card.css'

export default function Cards({elem}) {

  return (
      
        <div className='cards'>
            <h2>{elem.title}</h2>
            <div className='service_img'>
                <p className='quantity'><span>{elem.services}</span> услуг</p>
                <img className='cardImg' src={elem.img} alt='img'></img>
            </div>
        </div>
   
  )
}
