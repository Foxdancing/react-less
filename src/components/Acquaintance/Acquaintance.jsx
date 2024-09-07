import React from 'react'
import './Acquaintance.css';
import arrow from '..//..//img/arrow.svg';
import specialist from '..//..//img/specialist.png';
import specialistHorse from '..//..//img/specialist_horse.png';
import surgeon from '..//..//img/surgeon.png';
import arrow1 from '..//..//img/ic_arrow.png';
import arrow2 from '..//..//img/ic_arrow2.png';





export default function Acquaintance() {
  return (
    <div>
        <section className="history">
        <div className="history_text">
        <h2>История компании</h2>
        <p>История компании начинается 14 января 1999 года, когда было образовано ООО «Чижи». Идея пришла, т.к. у основателя компании Прозор Жанны Георгиевны была собака боксёр по кличке Бард…</p>
        <div className="history_further">
          <a href="#" className="further">ЧИТАТЬ ДАЛЕЕ</a>
          <img class="arrow" src={arrow}/>
        </div>

        <div className="our_specialists">
         <h2>Наши специалисты</h2>
          <div className="our_specialists_foto">
            <button type='button' className="circl_arrow">
              <img  src={arrow1}/>
            </button>

            <div className="img_specialist">
                <img src={specialist} alt="foto"/>
                <img src={specialistHorse} alt="foto"/>
                <img src={specialist} alt="foto"/>
                <img src={surgeon} alt="foto"/>
                <img className="phantom" src={surgeon}  alt="foto"/>
                <img className="phantom" src={surgeon}  alt="foto"/>
            </div>
            <div class="circl_arrow">
              <img  src={arrow2}/>
            </div>

          </div>

          <div class="our_specialists_all">
            <a href="#" class="all">ПОСМОТРЕТЬ ВСЕХ</a>
            <img class="arrow" src={arrow}/>
          </div>
          
        </div>
      </div>  
        </section>
    </div>
  )
}
