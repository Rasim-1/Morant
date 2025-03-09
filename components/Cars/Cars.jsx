import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./Cars.module.scss";
import CarCard from "../Car/Car";
import { Link } from "react-router-dom";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [count, setCount] = useState(12);

  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cars");
      setCars(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке данных: ", error);
    }
  };


  useEffect(() => {
    fetchCars();
  }, []);

  const toggleCount = () => {
    setCount(count + 4);
  };

  return (
    <section className={s.cars}>
      <div className="container">
        <div className={s.top}>
          <p className={s.cars_p}>Popular Car</p>
          <Link to="/filter">
            <a href="">View all</a>
          </Link>
        </div>
        <div className={s.car_list}>
          {cars.slice(0, count).map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <button className={s.moreBtn} onClick={toggleCount}>more</button>
      </div>
    </section>
  );
};

export default CarList;
