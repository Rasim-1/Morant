import React, { useEffect } from 'react'
import s from './Notification.module.scss'

import AOS from "aos";
import "aos/dist/aos.css"; 

const Notification = () => {

   useEffect(() => {
      AOS.init({ duration: 1000 }); 
    }, []);
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Специальные предложения</h1>
      <div className={s.notification}  data-aos="flip-up" data-aos-delay='200' >
        <div className={s.notificationHeader}>
          <h2>Скидка 15% на аренду через приложение!</h2>
          <span className={s.notificationDate}>До 31 декабря</span>
        </div>
        <p className={s.notificationDescription}>
          Получите 15% скидки на аренду автомобилей при бронировании через наше мобильное приложение. Акция действует до конца месяца, не упустите шанс!
        </p>
        <button className={s.btn}>Использовать скидку</button>
      </div>

      <div className={s.notification} data-aos="flip-up" data-aos-delay='400' >
        <div className={s.notificationHeader}>
          <h2>Сезонная акция — аренда на длительный срок</h2>
          <span className={s.notificationDate}>Акция на все автомобили</span>
        </div>
        <p className={s.notificationDescription}>
          При аренде автомобиля на срок от 7 дней вы получаете скидку 20%. Подробности — на сайте.
        </p>
        <button className={s.btn}>Забронировать сейчас</button>
      </div>

      <div className={s.notification} data-aos="flip-up" data-aos-delay='600' >
        <div className={s.notificationHeader}>
          <h2>Гибкие условия аренды для постоянных клиентов</h2>
          <span className={s.notificationDate}>С 1 по 10 января</span>
        </div>
        <p className={s.notificationDescription}>
          Мы ценим наших постоянных клиентов! При аренде автомобиля на срок более 10 дней — дополнительные бонусы и привилегии.
        </p>
        <button className={s.btn}>Подробнее</button>
      </div>
    </div>
  )
}

export default Notification
