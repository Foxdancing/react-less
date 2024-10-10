import React from 'react'
import swp from './Swiper.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'

export default function Swiper() {
  return (

    <nav>
        <ul>
            {['section1', 'section2', 'section3', 'section4', 'section5'].map}(
                (section, index) => (
                    <li key={section}>
                        <ScrolLink to={section} smooth={true} duration={500}>

                        </ScrolLink>
                    </li>
                )
            )
        </ul>
    </nav>


    // <div>
    //     <Swiper
    //     spaceBetween={50}
    //     slidesPerView={3}
    //     onSlideChange={() => console.log('slide change')}
    //     onSwipe={(swiper) => console.log(swiper)}
    //     >
        
    //     <SwiperSlide>Slide 1</SwiperSlide>
    //     <SwiperSlide>Slide 2</SwiperSlide>
    //     <SwiperSlide>Slide 3</SwiperSlide>
    //     <SwiperSlide>Slide 4</SwiperSlide>

    //     </Swiper>
        
    // </div>
  );
}
