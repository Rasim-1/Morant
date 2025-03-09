import React, { useEffect } from "react";
import s from "./How.module.scss";
import { Link } from "react-router-dom";
import Btn2 from "../Btn2/Btn2";

import AOS from "aos";
import "aos/dist/aos.css"; 

const How = () => {

   useEffect(() => {
      AOS.init({ duration: 1000 }); 
    }, []);
  return (
    <>
      <section className={s.how}>
        <div className="container">
          <div className={s.title} data-aos="flip-up" data-aos-delay='200'>
          <h1>How It Works</h1>
          </div>
          <div className={s.subTitle} data-aos="flip-up" data-aos-delay='400' >
          <p className={s.peshka}>
            Welcome to our car rental service! Renting a car is easy and
            convenient. Follow these simple steps to get started:
          </p>
          </div>

          <div className={s.wrapper}>
            <div className={s.steps}>
              <section className={`${s.step_1} ${s.step}`} data-aos="fade-down" data-aos-delay='200' >
                <h2>Step 1: Choose Your Car</h2>
                <p>
                  Browse our extensive fleet of vehicles. Use the filters to
                  find the perfect car for your needs.
                </p>
                <img
                  src="https://media.istockphoto.com/id/1285180944/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D0%B8-%D0%BD%D0%B0-%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%BA%D0%B5.jpg?s=612x612&w=0&k=20&c=4wU7jD749RH2M8jxPEh7qJUS3OHgmds0ozD0lWsV7Pg="
                  alt="Choose Your Car"
                />
              </section>

              <section className={`${s.step_2} ${s.step}`} data-aos="fade-down" data-aos-delay='400' >
                <h2>Step 2: Specify Dates and Times</h2>
                <p>
                  Select the date and time for pickup and drop-off. Make sure to
                  check availability.
                </p>
                <img
                  src="https://media.istockphoto.com/id/1435998392/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8F-%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D1%82%D0%B5-%D0%BA%D0%BB%D1%8E%D1%87%D0%B8-%D0%BE%D1%82-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F-%D0%BD%D0%BE%D0%B2%D0%BE%D0%BC%D1%83-%D0%B2%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%86%D1%83-%D0%BF%D0%BE%D1%81%D0%BB%D0%B5-%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B4%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B0-%D0%BB%D0%B8%D0%B7%D0%B8%D0%BD%D0%B3%D0%B0-%D0%B2.jpg?s=612x612&w=0&k=20&c=hJkiaVik8SwGfFe7ojhBeDVMQNXTKAge0wd6NCvLXQw="
                  alt="Select Dates"
                />
              </section>

              <section className={`${s.step_3} ${s.step}`} data-aos="fade-down" data-aos-delay='600' >
                <h2>Step 3: Fill in Driver Information</h2>
                <p>
                  Provide your driver's license details and any additional
                  information required.
                </p>
                <img
                  src="https://media.istockphoto.com/id/1141432832/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82-%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5-%D0%BF%D1%80%D0%B0%D0%B2%D0%B0-%D0%B8-%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5-%D0%BF%D1%80%D0%B0%D0%B2%D0%B0-%D0%B2%D0%BE-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B8.jpg?s=612x612&w=0&k=20&c=VGlJHpHTw2x1pDa9EXviE4g-teolvXZgGSwT2HYjdJg="
                  alt="Fill Driver Information"
                />
              </section>

              <section className={`${s.step_4} ${s.step}`} data-aos="fade-down" data-aos-delay='800' >
                <h2>Step 4: Choose Additional Services</h2>
                <p>
                  Add extras like GPS, child seats, or insurance for a more
                  comfortable ride.
                </p>
                <img
                  src="https://media.istockphoto.com/id/1216835172/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D0%B0%D1%8F-%D1%81%D0%B5%D0%BC%D1%8C%D1%8F-%D0%B2%D1%8B%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D1%82-%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C-%D0%B2-%D1%81%D0%B0%D0%BB%D0%BE%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=5HkaF0teWAcTZpVzuvdYQHAmJpuQm6m9op3bg7yLN3o="
                  alt="Choose Additional Services"
                />
              </section>

              <section className={`${s.step_5} ${s.step}`} data-aos="fade-down" data-aos-delay='1000' >
                <h2>Step 5: Payment and Confirmation</h2>
                <p>
                  Complete your booking by making a secure payment. You'll
                  receive a confirmation email shortly.
                </p>
                <img
                  src="https://media.istockphoto.com/id/164644284/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%B0%D1%81%D0%BB%D0%B0%D0%B4%D0%B8%D1%82%D0%B5%D1%81%D1%8C-%D0%BD%D0%BE%D0%B2%D1%8B%D1%85-%D0%BA%D0%BE%D0%BB%D0%B5%D1%81.jpg?s=612x612&w=0&k=20&c=wuinBL4FwQTcRpfZnpBzY8ySMX9HLa7lkO126RyfJRw="
                  alt="Payment and Confirmation"
                />
              </section>
            </div>

            <div className={s.wrap}>
              <section className={s.last}>
                <h2>What Our Customers Say</h2>
                <blockquote>
                  "The process was seamless and the car was in great condition!"
                  - John D.
                </blockquote>
                <blockquote>
                  "Highly recommend! Great selection and friendly service." -
                  Sarah L.
                </blockquote>
              </section>

              <section className={s.ready} >
                <h2>Ready to Get Started?</h2>
                <p>Book your car today and hit the road!</p>
                <Link to={'/filter'} >
                <Btn2>Rent a Car</Btn2>
                </Link>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default How;
