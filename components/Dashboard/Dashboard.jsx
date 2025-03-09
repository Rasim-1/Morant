import s from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    
  

      <div className={s.detailsRental}>
        <div className={s.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.6553417343125!2d69.27198708779711!3d41.2946049973415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bb0d9e36a43%3A0xb769fa17fbfeddd9!2sBYD%20CENTRAL%20ASIA!5e0!3m2!1sru!2s!4v1734023844569!5m2!1sru!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={s.carDetails}>
          <div className={s.carHeader}>
            <img
              src="/public/Look.png" 
              alt="Nissan GT-R"
              className={s.carImage}
            />
            <div>
              <h2>Nissan GT-R</h2>
              <p>Sport Car</p>
            </div>
          </div>

          <div className={s.rentalInfo}>
            <div className={s.C}>
              <img src="/public/Mark (1).png" alt="" />
              <h2>Pick-Up</h2>
            </div>

            <div className={s.infoRow}>
              <div className={s.com}>
                <h3>Location</h3>
                <div>
                  {' '}
                  <p>Kota Semarang</p>
                  <img src="/public/angle-small-down.png" alt="" />
                </div>
              </div>
              <div className={s.line}></div>
              <div className={s.com}>
                <h3>Date</h3>
                <div>
                  <p>20 July 2022</p>
                  <img src="/public/angle-small-down.png" alt="" />
                </div>
              </div>
              <div className={s.line2}></div>
              <div className={s.com}>
                <h3>Time</h3>

                <div>
                  {' '}
                  <p>07.00</p>
                  <img src="/public/angle-small-down.png" alt="" />
                </div>
              </div>
            </div>

            <div className={s.C}>
              <img src="/public/Mark (1).png" alt="" />
              <h2>Drop - Off</h2>
            </div>
            <div className={s.infoRov}>
              <div className={s.com}>
                <h3>Location</h3>
                <div>
                  {' '}
                  <p>Kota Semarang</p>
                  <img src="/public/angle-small-down.png" alt="" />
                </div>
              </div>
              <div className={s.line}></div>
              <div className={s.com}>
                <h3>Date</h3>
                <div>
                  <p>21 July 2022</p>
                  <img src="/public/angle-small-down.png" alt="" />
                </div>
              </div>
              <div className={s.line2}></div>
              <div className={s.com}>
                <h3>Time</h3>

                <div>
                  {' '}
                  <p>07.00</p>
                  <img src="/public/angle-small-down.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={s.line3}></div>
          <div className={s.totalPrice}>
            <h3>Total Rental Price</h3>
            <p>Overall price and includes rental discount</p>
            <h1>$80.00</h1>
          </div>
        </div>
      </div>
      
  
    
  );
};

export default Dashboard;
