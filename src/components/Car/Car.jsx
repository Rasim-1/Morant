import React, { useState, useEffect } from "react";
import s from "./Car.module.scss";
import Btn from "../Btn/Btn";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; 

const CarCard = ({ car }) => {
  const [isFavorite, setIsFavorite] = useState(false); 


  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteCars")) || [];
    setIsFavorite(storedFavorites.some((favCar) => favCar.id === car.id));
  }, [car.id]);


  const handleFavoriteClick = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteCars")) || [];

    let updatedFavorites;
    if (isFavorite) {

      updatedFavorites = storedFavorites.filter((favCar) => favCar.id !== car.id);
    } else {

      updatedFavorites = [...storedFavorites, car];
    }

    localStorage.setItem("favoriteCars", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
      AOS.init({ duration: 500 }); 
    }, []);
  

  return (
    <div className={s.car_card} data-aos="fade-up" >
      <h3 className={s.car_name}>{car.name}</h3>
      <p className={s.car_category}>{car.category}</p>
     <Link to={`/carPage/${car.id}`} >
     <img loading="lazy" src={car.image} alt={car.name} className={s.car_image} />
     </Link>
      
      <p className={s.car_details}>
        <img loading="lazy" src="/gas-station.svg" alt="Fuel" />
        {car.fuel} <img loading="lazy" src="/Car (2).svg" alt="Transmission" />
        {car.transmission} <img loading="lazy" src="/peoples1.svg" alt="Seats" />
        {car.seats}
      </p>
      

      <button
        className={s.like_button}
        onClick={handleFavoriteClick}
      >
        <img
          src={isFavorite ? "/like-2.svg" : "/like-1.svg"}
          alt={isFavorite ? "Liked" : "Like"}
        />
      </button>

      <div className={s.rent}>
        <div className={s.prices}>
          <p className={s.price}>{car.price}</p>{" "}
          {car.oldPrice && <s className={s.old_price}>{car.oldPrice}</s>}
        </div>
        <Link to={`/carPage/${car.id}`}>
          <Btn>Rent now</Btn>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
