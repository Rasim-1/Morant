import React, { useState } from 'react';
import s from './MainMenu.module.scss';
import { Link } from 'react-router-dom';

const Modal = ({ message, onClose }) => {
  const messagePart1 = "If anything goes wrong,";
  const messagePart2 = "our 24/7 support is always ready to help you.";

  return (
    <div className={s.modalOverlay}>
      <div className={s.modalContent}>
        <h3>
          <span className={s.highlight}>{messagePart1}</span> {messagePart2}
        </h3>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const MainMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className={s.menu}>
        <div className={s.wrapper}>
          <h3>main menu</h3>
          <div className={s.wrap}>
            <Link to={'/filter'}>
              <p>
                <img src="/home-img.svg" alt="" />Dashboard
              </p>
            </Link>
            <Link to={'/howpage'}>
              <p>
                <img src="/car-img.svg" alt="" />Car Rent
              </p>
            </Link>
            <Link to={'/eventsPage'}>
              <p>
                <img src="/chart-img.svg" alt="" />Insight
              </p>
            </Link>

            <p onClick={openModal}>
              <img src="/wallet-img.svg" alt="" />Reimburse
            </p>
           <Link to={'/notification'} >
           <p>
              <img src="/message-img.svg" alt="" />Inbox
            </p>
           </Link>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <Modal
          message="If anything goes wrong, our 24/7 support is always ready to help you."
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default MainMenu;
