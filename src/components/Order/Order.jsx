import React, { useEffect } from 'react';
import Products from '/public/products.json';
import s from './Order.module.scss';
import Form from '../Form/Form';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Order = ({ id }) => {
  const car = Products.find((product) => product.id === parseInt(id));

  if (!car) {
    return <p>Машина не найдена</p>;
  }

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <section className={s.order}>
      <div className="container">
        <div className={s.wrapper}>
          <Form />
          <div className={s.card} data-aos="zoom-out-up" data-aos-delay="200">
            <h2>{car.name}</h2>
            <p>{car.about}</p>
            <img src={car.image} alt={car.name} className={s.image} />
            <div className={s.details}>
              <p>
                <span>Цена:</span> {car.price}
              </p>
              <p>
                <span>Тип машины:</span> {car.category}
              </p>
              <p>
                <span>Топливо:</span> {car.fuel}
              </p>
              <p>
                <span>Трансмиссия:</span> {car.transmission}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
