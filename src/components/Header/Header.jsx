import React from 'react';
import logo from '..//..//img/LOGOO.svg';
import location from '..//..//img/location.png';
import circl from '..//..//img/circl.svg';
import inst from '..//..//img/inst.png';
import fb from '..//..//img/fb.png';
import vk from '..//..//img/vk.png';
import youtube from '..//..//img/youtube.png';
import catDog from '..//..//img/cat&dog.png';
import bird from '..//..//img/bird.png';
import head from './Header.module.css';



export default function Header() {
  return (
    <div className={head.wrap}>
       <nav className={head.navbar}>
              <ul className={head.navbar_list}>
                <li className={head.navbar_list_haed}>
                    <div className={head.LOGO}>
                    <img  src={logo} alt="no LOGO" />
                    </div>

                    <div className={head.burger}>
                        <span className={head.line}></span>
                        <span className={head.line}></span>
                        <span className={head.line}></span>
                    </div>
                </li>

                <li className={head.navbar_list_navigation}>
                  <div className={head.wrap_info}>
                    <p><a href="#">Личный кабинет</a></p>
                    <p><a href="#">О нас</a></p>
                    <p><a href="#">Новости и акции</a></p>
                    <p><a href="#">Каталог</a></p>
                    <p><a href="#">Бронь</a></p>
                  </div>
                  
                  <div className={head.location}>
                    <p>
                      <img className={head.img_location}  src={location} alt=""/>
                      <a href='#'>Волгоград</a>

                    </p>
                  </div>

                </li>  
                </ul>

            </nav>

            <div className={head.container}>

              <div className={head.list_numbers}>
              <ul className={head.numbers}>
                <li>1 <img className={head.circl} src={circl} alt=" "/></li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>

              </ul>
              </div>

              <div className={head.info}>
                <h1 className={head.title}>Айболит круглосуточная ветклиника</h1>

                
                  <button className={head.btn} type='button'>ЗАПИСАТЬСЯ</button>
              

                <div className={head.social_network}>
                  <a href="#"><img src={inst} alt=" "/></a>
                  <a href="#"><img src={fb} alt=" "/></a>
                  <a href="#"><img src={vk} alt=" "/></a>
                  <a href="#"><img src={youtube} alt=" "/></a>
                </div>

              </div>

              <div className={head.catdog_desktop}>
                <img src={catDog} alt=" "/>
                
              </div>

             
              <div className={head.bird_notepad}>
                <img src={bird} alt=" "/>
              </div>

            </div> 

            
    </div>
  )
}
