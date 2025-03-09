import React, { useEffect } from 'react';
import s from './Setings.module.scss';
import MainMenu from '../MainMenu/MainMenu';
import Map from '../Map/Map';
import Chart from '../Chart/Chart';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Setings = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <>
      <section className={s.setings}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.menu} data-aos="flip-right" data-aos-delay="200" >
              <MainMenu />
            </div>
            <div className={s.map} data-aos="flip-right"  data-aos-delay="400" >
              <Map />
            </div>
           <div className={s.chart} data-aos="flip-right"  data-aos-delay="600" >
           <Chart />
           </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Setings;
