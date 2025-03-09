import React from 'react';
import s from './Map.module.scss';
import Products from '/public/products.json'; 

const Map = () => {
  const car = Products[2]; 

  return (
    <div className={s.wrapper}>
      <h3>Details Rental</h3>
      <div className={s.wrap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.5809962917686!2d69.28355003173813!3d41.316521240226216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5200a480655%3A0xeabc5e2bd1cdaae9!2sIT-Academy!5e0!3m2!1sru!2s!4v1735289536102!5m2!1sru!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {car ? (
          <div className={s.card}>
            <img src={car.image} alt={car.name} />
            <div className={s.text}>
              <div className={s.car_inf}>
              <h4>{car.name}</h4>
              <p> {car.id}</p>
              </div>
            <p> {car.category}</p>
            </div>
          </div>
        ) : (
          <p>Данные о машине не найдены.</p>
        )}
      </div>

      <h2>{car.price}</h2>
      <s>{car.oldPrice}</s>
    </div>
  );
};

export default Map;
