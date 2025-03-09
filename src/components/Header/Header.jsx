import React, { useEffect, useState, useRef, useMemo } from 'react';
import s from './Header.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import carData from '/public/products.json';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

 
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(searchQuery), 300);
    return () => clearTimeout(handler);
  }, [searchQuery]);


  const filteredCars = useMemo(() => {
    if (!debouncedQuery) return carData;

    const query = debouncedQuery.toLowerCase();
    return carData.filter((car) =>
      Object.values(car).some((value) =>
        String(value).toLowerCase().includes(query)
      )
    );
  }, [debouncedQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleInputClick = () => {
    setShowResults(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowResults(false), 100);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <header id="featured" className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.box} data-aos="fade-down" data-aos-delay="200">
            <Link className={s.logo} to={'/'}>
              <SectionTitle>MORANT</SectionTitle>
            </Link>
            <input
              placeholder="Search something"
              className={s.search}
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              onClick={handleInputClick}
              onBlur={handleBlur}
              onFocus={() => setShowResults(true)}
              data-aos="fade-down"
              data-aos-delay="400"
            />
          </div>
          <div className={s.menu}>
            {[
              { to: '/favorite', src: '/Like-img.svg', delay: 600 },
              {
                src: '/Notification-img.svg',
                delay: 800,
                onClick: toggleDropdown,
              },
              { to: '/setingsPage', src: '/Settings-img.svg', delay: 1000 },
              { src: '/Profile-img.svg', delay: 1200 },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.to || '#'}
                onClick={item.onClick}
                data-aos="fade-down"
                data-aos-delay={item.delay}
              >
                <img src={item.src} alt="" />
              </Link>
            ))}

            {showDropdown && (
              <div ref={dropdownRef} className={s.dropdown}>
                <p>У вас новое сообщение</p>
                <p>Ваша бронь подтверждена</p>
                <p>Запланировано техническое обслуживание</p>
                <Link onClick={toggleDropdown} to={'/notification'}>
                  Посмотреть все уведомления
                </Link>
              </div>
            )}
          </div>
          <div className={`${s.searchResults} ${showResults ? s.show : ''}`}>
  {filteredCars.length > 0 ? (
    filteredCars.map((car, index) => (
      <div
        key={car.id || index} 
        className={s.carCard}
        data-aos="fade-down"
        data-aos-delay={200 + index * 100}
      >
        <Link to={`/carPage/${car.id}`}>
          <img src={car.image} alt={car.name} />
          <h3>{car.name}</h3>
          <p>{car.price}</p>
        </Link>
      </div>
    ))
  ) : (
    <p>По вашему запросу ничего не найдено</p>
  )}
</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
