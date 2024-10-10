import React from 'react'
import card from './Card.module.css'

export default function Cards({elem}) {

  return (
      
        <div className={card.cards}>
            <h2>{elem.title}</h2>
            <div className={card.service_img}>
                <p className={card.quantity}><span>{elem.services}</span> услуг</p>
                <img className={card.cardImg} src={elem.img} alt='img'></img>
            </div>
        </div>
   
  )
}
