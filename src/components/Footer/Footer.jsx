import React from "react";
// import "./Footer.css";
import inst from "..//..//img/inst.png";
import fb from "..//..//img/fb.png";
import vk from "..//..//img/vk.png";
import youtube from "..//..//img/youtube.png";
import logoMini from "..//..//img/logo.svg";
import appStore from "..//..//img/app_store.png";
import googlePlay from "..//..//img/google_play.png";
import cls from './Footer.module.css'

export default function Footer() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500"
        rel="stylesheet"
      />
      <footer className={cls.footer}>
        <div className={cls.navigation}>
          <div className={cls.infomaition}>
            <div className={cls.logo_mini}>
              <a href="#">
                <img className={cls.logo_mini_circle} src={logoMini} alt='img'/>
              </a>
              <div className={cls.logo_mini_text}>
                <h3>Айболит</h3>
                <p>ВЕТЕРИНАРНАЯ КЛИНИКА</p>
              </div>
            </div>

            <div className={cls.links}>
              <div className={cls.confidentiality}>
                <p>
                  <a href="#">
                    Политика конфиденциальности в отношении обработки
                    персональных данных
                  </a>
                </p>
              </div>

              <div className={cls.infomaition_links}>
                <ul className={cls.infomaition_links_list}>
                  <li>
                    <a href="#">Главная</a>
                  </li>
                  <li>
                    <a href="#">Услуги и цены</a>
                  </li>
                  <li>
                    <a href="#">История компании</a>
                  </li>
                  <li>
                    <a href="#">Наши специалисты</a>
                  </li>
                  <li>
                    <a href="#">Вакансии</a>
                  </li>
                  <li>
                    <a href="#">Реквизиты</a>
                  </li>
                  <li>
                    <a href="#">Онлайн-оплата</a>
                  </li>
                </ul>
              </div>

              <div className={cls.infomaition_links}>
                <ul className={cls.infomaition_links_list}>
                  <li>
                    <a href="#">Отзывы</a>
                  </li>
                  <li>
                    <a href="#">Контакты</a>
                  </li>
                  <li>
                    <a href="#">Груминг-салон</a>
                  </li>
                  <li>
                    <a href="#">Косметика</a>
                  </li>
                  <li>
                    <a href="#">Новости и акции</a>
                  </li>
                  <li>
                    <a href="#">Блог</a>
                  </li>
                </ul>
              </div>

              <div className={cls.infomaition_links_notepad}>
                <ul className={cls.infomaition_links_list_notepad}>
                  <li>
                    <a href="#">Главная</a>
                  </li>
                  <li>
                    <a href="#">Услуги и цены</a>
                  </li>
                  <li>
                    <a href="#">Отзывы</a>
                  </li>
                  <li>
                    <a href="#">Контакты</a>
                  </li>
                  <li>
                    <a href="#">Онлайн-оплата</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={cls.contacts}>
            <div className={cls.application}>
              <a href="#">
                <img src={appStore} alt='img'/>
              </a>
              <a href="#">
                <img src={googlePlay} alt='img'/>
              </a>
            </div>

            <div className={cls.social_media}>
              <a href="#">
                <img className={cls.social_media_img} src={inst} alt='img'/>
              </a>
              <a href="#">
                <img className={cls.social_media_img} src={fb} alt='img'/>
              </a>
              <a href="#">
                <img className={cls.social_media_img} src={vk} alt='img'/>
              </a>
              <a href="#">
                <img className={cls.social_media_img} src={youtube} alt='img'/>
              </a>
            </div>

            <div className={cls.email}>
              <a href="mailto:aibolit34@gmail.com">aibolit34@gmail.com</a>
              <a href="mailto:aibolit34@yandex.ru">aibolit34@yandex.ru</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
