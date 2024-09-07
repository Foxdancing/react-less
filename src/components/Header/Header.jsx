import React from 'react';
import './header.css';
import logo from '..//..//img/LOGOO.svg';
import location from '..//..//img/location.png';
import circl from '..//..//img/circl.svg';
import inst from '..//..//img/inst.png';
import fb from '..//..//img/fb.png';
import vk from '..//..//img/vk.png';
import youtube from '..//..//img/youtube.png';
import catDog from '..//..//img/cat&dog.png';
import bird from '..//..//img/bird.png';



export default function Header() {
  return (
    <div className='wrap'>
       <nav className="navbar">
              <ul className="navbar-list">
                <li className="haed">
                    <li className="LOGO">
                    <img  src={logo} alt="no LOGO" />
                    </li>

                    <li className="burger">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </li>
                </li>

                <li className='navigation'>
                  <li className="wrap-info">
                    <li><a href="#">Личный кабинет</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Новости и акции</a></li>
                    <li><a href="#">Каталог</a></li>
                    <li><a href="#">Бронь</a></li>
                  </li>
                  
                  <li className='location'>
                    <li>
                      <img className='img_location'  src={location}/>
                      <a href='#'>Волгоград</a>

                    </li>
                  </li>

                </li>  
                </ul>

            </nav>

            <div className='container'>

              <div className='list_numbers'>
              <ul className='numbers'>
                <li>1 <img className='circl' src={circl}/></li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>

              </ul>
              </div>

              <div className='info'>
                <h1 class="title">Айболит круглосуточная ветклиника</h1>

                <div class="btn">
                  <button type='button'>ЗАПИСАТЬСЯ</button>
                </div>

                <div class="social_network">
                  <a href="#"><img src={inst}/></a>
                  <a href="#"><img src={fb}/></a>
                  <a href="#"><img src={vk}/></a>
                  <a href="#"><img src={youtube}/></a>
                </div>

              </div>

              <div class="catdog_desktop">
                <img src={catDog}/>
                
              </div>

             
              <div class="bird_notepad">
                <img src={bird}/>
              </div>

            </div> 

            
    </div>
  )
}
