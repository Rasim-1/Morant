import React, { useEffect, useState } from 'react';
import s from './Footer.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import Btn2 from '../Btn2/Btn2';

import AOS from "aos";
import "aos/dist/aos.css"; 

const Footer = () => {
  const [isPartnershipModalOpen, setIsPartnershipModalOpen] = useState(false);
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const openPartnershipModal = () => setIsPartnershipModalOpen(true);
  const closePartnershipModal = () => setIsPartnershipModalOpen(false);

  const openBusinessModal = () => setIsBusinessModalOpen(true);
  const closeBusinessModal = () => setIsBusinessModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendToTelegram = async (data) => {
    const botToken = '7629587294:AAFjAEmnzYc06BtG9OoUQYSctKxCSiFjTb4'; // Replace with your bot token
    const chatId = '-4799118768'; // Replace with your chat ID
    const message = `
      New business relation request:
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
    `;
    
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const payload = {
      chat_id: chatId,
      text: message,
    };

    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendToTelegram(formData);
    setFormData({ name: '', email: '', message: '' });
    closeBusinessModal();
  };

 
  const copyLinkToClipboard = () => {
    const link = window.location.origin; 
    navigator.clipboard.writeText(link)  
      .then(() => {
        alert('Ссылка скопирована в буфер обмена!');
      })
      .catch(err => {
        console.error('Ошибка при копировании ссылки: ', err);
      });
  };

   useEffect(() => {
      AOS.init({ duration: 1000 }); 
    }, []);

  return (
    <>
      <footer className={s.footer}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.box1} data-aos="flip-up" data-aos-delay='200' >
              <Link to={'/'}>
                <SectionTitle>MORANT</SectionTitle>
              </Link>
              <p>Our vision is to provide convenience and help increase your sales business.</p>
            </div>
            <div className={s.box} data-aos="flip-down" data-aos-delay='400' >
              <h2>About</h2>
              <Link to={"/howpage"}>How it works</Link>
              <a href='/#featured'>Featured</a>
              <a onClick={openPartnershipModal} style={{ cursor: 'pointer' }}>Partnership</a>
              <a onClick={openBusinessModal} style={{ cursor: 'pointer' }}>Business Relation</a>
            </div>

            <div className={s.box} data-aos="flip-down" data-aos-delay='600' >
              <h2>Community</h2>
              <Link to={'/eventsPage'}>Events</Link>
              <a target='_blank' href='https://www.youtube.com/@Ja_Morant/videos'>Blog</a>
              <a target='_blank' href='https://www.youtube.com/watch?v=SMi5p7W-BNo'>Podcast</a>
              <a onClick={copyLinkToClipboard} style={{ cursor: 'pointer' }}>Invite a friend</a> {/* Добавляем функцию здесь */}
            </div>

            <div className={s.box} data-aos="flip-down" data-aos-delay='800' >
              <h2>Socials</h2>
              <a target='_blank' href='https://discord.com/'>Discord</a>
              <a target='_blank' href='https://www.instagram.com/itacademy_uz/?hl=en'>Instagram</a>
              <a target='_blank' href='https://x.com/?lang=en'>Twitter</a>
              <a target='_blank' href='https://www.facebook.com/itacademyuz/'>Facebook</a>
            </div>
          </div>

          <div className={s.line}></div>

          <div className={s.wrap}>
            <div className={s.card}  >
              <b>©2022 MORENT. All rights reserved</b>
            </div>
            <div className={s.card}  >
              <b>Privacy & Policy</b>
              <b>Terms & Condition</b>
            </div>
          </div>
        </div>
      </footer>

      {isPartnershipModalOpen && (
        <div className={s.modalOverlay} onClick={closePartnershipModal}>
          <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={s.closeButton} onClick={closePartnershipModal}>✖️</button>
            <h2>Our Partners</h2>
            <div className={s.partners}>
              <div className={s.partnerItem}>
                <img src="https://www.pngplay.com/wp-content/uploads/13/Lamborghini-Logo-PNG-Background.png" alt="Company 1" />
                <a target='blanck' href="https://www.lamborghini.com/en-en">Lamborghini</a>
              </div>
              <div className={s.partnerItem}>
                <img src="https://www.freepnglogos.com/uploads/hyundai-logo-7.png" alt="Company 2" />
                <a target='blanck'  href="https://www.hyundai.com/worldwide/en">Hyundai</a>
              </div>
              <div className={s.partnerItem}>
                <img src="https://loodibee.com/wp-content/uploads/Honda-Logo.png" alt="Company 3" />
                <a target='blanck'  href="https://global.honda/en/">Honda</a>
              </div>
              <div className={s.partnerItem}>
                <img src="https://cdn.freebiesupply.com/logos/large/2x/chevrolet-1-logo-png-transparent.png" alt="Company 1" />
                <a target='blanck'  href="https://www.chevrolet.com/">Chevrolet</a>
              </div>
              <div className={s.partnerItem}>
                <img src="https://logos-world.net/wp-content/uploads/2021/03/Audi-Logo.png" alt="Company 2" />
                <a target='blanck'  href="https://www.audi.com/en.html">Audi</a>
              </div>
              <div className={s.partnerItem}>
                <img src="https://i.pinimg.com/originals/9d/bd/fd/9dbdfd81ed2519c8e33bf5fd533380bc.png" alt="Company 3" />
               <a target='blanck'  href="https://www.koenigsegg.com/">Koenigsegg</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {isBusinessModalOpen && (
        <div className={s.modalOverlay} onClick={closeBusinessModal}>
          <div className={s.modalContent_2} onClick={(e) => e.stopPropagation()}>
            <button className={s.closeButton} onClick={closeBusinessModal}>×</button>
            <h2>Business Relation</h2>
            <form onSubmit={handleSubmit} className={s.form}>
              <div className={s.formGroupse}>
              <div className={s.formGroup}>
                <label htmlFor="name">Your name: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="email">Your email: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={s.formGroup}>
                <label htmlFor="message">Message: </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              </div>
              <Btn2>Send</Btn2>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
