import React, { useState, useEffect } from 'react';
import s from './PickUp.module.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

const PickUp = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedValues, setSelectedValues] = useState({
    'pickup-locations': '',
    'pickup-date': '',
    'pickup-time': '',
    'dropoff-locations': '',
    'dropoff-date': '',
    'dropoff-time': '',
  });

  const toggleSection = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  const handleSelect = (section, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [section]: value,
    }));
    setExpandedSection(null);
  };

  const generateDropOffDates = (pickupDate) => {
    if (!pickupDate) return [];
    const baseDate = new Date(pickupDate);

    const addDays = (days) => {
      const newDate = new Date(baseDate);
      newDate.setDate(newDate.getDate() + days);
      return newDate.toISOString().split('T')[0];
    };

    return [addDays(1), addDays(3), addDays(7)];
  };

  const dropOffDates = generateDropOffDates(selectedValues['pickup-date']);

  const isFormComplete = Object.values(selectedValues).every((value) => value);

  const handleSubmit = () => {
    if (!isFormComplete) {
      alert('Please complete the list before submitting.');
    } else {
      alert('Form submitted!');
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <section className={s.PickUp}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.cards}>
            <div className={s.card}>
              <p>
                <img src="/PickUp-img1.svg" alt="" /> Pick - Up
              </p>
              <div className={s.info}>
                <div>
                  <b>Locations</b>
                  <p onClick={() => toggleSection('pickup-locations')}>
                    {selectedValues['pickup-locations'] || 'Select your city'}{' '}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={
                        expandedSection === 'pickup-locations' ? s.expanded : ''
                      }
                    />
                  </p>
                  {expandedSection === 'pickup-locations' && (
                    <div className={s.dropdown}>
                      <p
                        onClick={() =>
                          handleSelect('pickup-locations', 'Tashkent')
                        }
                      >
                        Tashkent
                      </p>
                      <p
                        onClick={() =>
                          handleSelect('pickup-locations', 'Bukhara')
                        }
                      >
                        Bukhara
                      </p>
                      <p
                        onClick={() =>
                          handleSelect('pickup-locations', 'Samarkand')
                        }
                      >
                        Samarkand
                      </p>
                    </div>
                  )}
                </div>
                <div className={s.line}></div>

                <div>
                  <b>Date</b>
                  <p onClick={() => toggleSection('pickup-date')}>
                    {selectedValues['pickup-date'] || 'Select a date'}{' '}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={
                        expandedSection === 'pickup-date' ? s.expanded : ''
                      }
                    />
                  </p>
                  {expandedSection === 'pickup-date' && (
                    <div className={s.dropdown}>
                      <p
                        onClick={() =>
                          handleSelect('pickup-date', '2024-12-18')
                        }
                      >
                        2024-12-18
                      </p>
                      <p
                        onClick={() =>
                          handleSelect('pickup-date', '2024-12-19')
                        }
                      >
                        2024-12-19
                      </p>
                      <p
                        onClick={() =>
                          handleSelect('pickup-date', '2024-12-20')
                        }
                      >
                        2024-12-20
                      </p>
                    </div>
                  )}
                </div>
                <div className={s.line}></div>

                <div>
                  <b>Time</b>
                  <p onClick={() => toggleSection('pickup-time')}>
                    {selectedValues['pickup-time'] || 'Select a time'}{' '}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={
                        expandedSection === 'pickup-time' ? s.expanded : ''
                      }
                    />
                  </p>
                  {expandedSection === 'pickup-time' && (
                    <div className={s.dropdown}>
                      <p
                        onClick={() => handleSelect('pickup-time', '10:00 AM')}
                      >
                        10:00 AM
                      </p>
                      <p onClick={() => handleSelect('pickup-time', '2:00 PM')}>
                        2:00 PM
                      </p>
                      <p onClick={() => handleSelect('pickup-time', '6:00 PM')}>
                        6:00 PM
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button
              className={s.btn}
              onClick={handleSubmit} 
            >
              <img src="/arrows-img.svg" alt="" />
            </button>

            <div className={s.card}>
              <p>
                <img src="/PickUp-img1.svg" alt="" /> Drop - Off
              </p>
              <div className={s.info}>
                <div>
                  <b>Locations</b>
                  <p onClick={() => toggleSection('dropoff-locations')}>
                    {selectedValues['dropoff-locations'] || 'Select your city'}{' '}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={
                        expandedSection === 'dropoff-locations'
                          ? s.expanded
                          : ''
                      }
                    />
                  </p>
                  {expandedSection === 'dropoff-locations' && (
                    <div className={s.dropdown}>
                      <p
                        onClick={() =>
                          handleSelect('dropoff-locations', 'Tashkent')
                        }
                      >
                        Tashkent
                      </p>
                      <p
                        onClick={() =>
                          handleSelect('dropoff-locations', 'Bukhara')
                        }
                      >
                        Bukhara
                      </p>
                      <p
                        onClick={() =>
                          handleSelect('dropoff-locations', 'Samarkand')
                        }
                      >
                        Samarkand
                      </p>
                    </div>
                  )}
                </div>
                <div className={s.line}></div>

                <div>
                  <b>Date</b>
                  <p onClick={() => toggleSection('dropoff-date')}>
                    {selectedValues['dropoff-date'] || 'Select a date'}{' '}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={
                        expandedSection === 'dropoff-date' ? s.expanded : ''
                      }
                    />
                  </p>
                  {expandedSection === 'dropoff-date' && (
                    <div className={s.dropdown}>
                      {dropOffDates.length > 0 ? (
                        dropOffDates.map((date) => (
                          <p
                            key={date}
                            onClick={() => handleSelect('dropoff-date', date)}
                          >
                            {date}
                          </p>
                        ))
                      ) : (
                        <p className={s.disabled}>Select pick-up date first</p>
                      )}
                    </div>
                  )}
                </div>

                <div className={s.line}></div>

                <div>
                  <b>Time</b>
                  <p onClick={() => toggleSection('dropoff-time')}>
                    {selectedValues['dropoff-time'] || 'Select a time'}{' '}
                    <img
                      src="/arrow-down.svg"
                      alt=""
                      className={
                        expandedSection === 'dropoff-time' ? s.expanded : ''
                      }
                    />
                  </p>
                  {expandedSection === 'dropoff-time' && (
                    <div className={s.dropdown}>
                      <p
                        onClick={() => handleSelect('dropoff-time', '8:00 AM')}
                      >
                        8:00 AM
                      </p>
                      <p
                        onClick={() => handleSelect('dropoff-time', '12:00 PM')}
                      >
                        12:00 PM
                      </p>
                      <p
                        onClick={() => handleSelect('dropoff-time', '4:00 PM')}
                      >
                        4:00 PM
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickUp;
