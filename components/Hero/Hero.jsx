import React, { useEffect } from "react";
import s from "./Hero.module.scss";
import Btn from "../Btn/Btn";
import Btn2 from "../Btn2/Btn2";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; 

const Hero = () => {

   useEffect(() => {
         AOS.init({ 
           duration: 500,
            once: true
   
          }); 
       }, []);

  return (
    <>
      <section  className={s.hero}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.card} data-aos="flip-left">
              <div>
                <h2>The Best Platform for Car Rental</h2>
                <p>
                  Ease of doing a car rental safely and reliably. Of course at a
                  low price.
                </p>
                <Link to={'/carPage/1'} >
                <Btn>Rental  car</Btn>
                </Link>
              </div>
            </div>
            <div className={s.card} data-aos="flip-right" >
              <div>
                <h2>Easy way to rent a car at a low price </h2>
                <p>
                  Providing cheap car rental services and safe and comfortable
                  facilities.
                </p>
                
               <Link to={'/carPage/2'} >
               <Btn2>Rental car</Btn2>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
