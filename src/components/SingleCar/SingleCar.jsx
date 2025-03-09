import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./SingleCar.module.scss";
import { useParams, useNavigate, Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import Reviews from "../Reviews/Reviews";
import AOS from "aos";
import "aos/dist/aos.css";
import Btn from "../Btn/Btn";

const SingleCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [rating, setRating] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const fetchCar = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cars/${id}`);
      setCar(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке данных автомобиля: ", error);
    }
  };

  useEffect(() => {
    fetchCar();
    AOS.init({ duration: 1000 });
  }, [id]);

  useEffect(() => {
    const savedRating = localStorage.getItem(`car-rating-${id}`);
    if (savedRating) {
      setRating(parseInt(savedRating));
    }
  }, [id]);

  const handleRating = (newRating) => {
    setRating(newRating);
    localStorage.setItem(`car-rating-${id}`, newRating);
  };

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

  if (!car) {
    return <p>Машина не найдена</p>;
  }

  return (
    <>
      <Modal isOpen={isModalOpen} image={modalImage} onClose={closeModal} />
      <section className={s.singlecar}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.boxes}>
              <div
                className={s.box}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className={s.images}>
                  <div className={s.topImage}>
                    <h3 className={s.zagalovok}>
                      Sports car with the best design and acceleration
                    </h3>
                    <p>
                      Safety and comfort while driving a futuristic and elegant
                      sports car
                    </p>
                    <img src={car.image} alt={car.name} />
                  </div>
                  <div className={s.bottomImage}>
                    {[car.image, car.images[0], car.images[1]].map(
                      (image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Car ${index + 1}`}
                          className={s.thumbnail}
                          onClick={() => openModal(image)}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`${s.box} ${s.box_2}`}
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <h1>{car.name}</h1>
                <div className={s.rating}>
                  <p>Rate this car:</p>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={star <= rating ? s.starSelected : s.star}
                      onClick={() => handleRating(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <div className={s.title}>
                  <p>{car.about}</p>
                  <div className={s.info}>
                    <div>
                      <b>
                        <p>Type Car</p> {car.category}
                      </b>
                      <b>
                        <p>Steering</p> {car.price}
                      </b>
                    </div>
                    <div>
                      <b>
                        <p>Capacity</p> {car.fuel}
                      </b>
                      <b>
                        <p>Gasoline</p> {car.transmission}
                      </b>
                    </div>
                  </div>
                </div>
                <Link to={`/order/${car.id}`}>
                  <Btn>Rent now</Btn>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Reviews />
    </>
  );
};

export default SingleCar;
