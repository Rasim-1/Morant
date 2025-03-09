import s from './CarRental.module.scss';
const CarRental = () => {
  return (
    <>
      <div className={s.dashboardContainer}>
        <div className={s.topSection}>
          <div className={s.topCard}>
            <div className={s.bighead}>
              <h2>Top 5 Car Rental</h2>
              <img src="/public/more.png" alt="" />
            </div>
            <div className={s.chart}>
              <div className={s.chartCenter}>
                <img src="/public/Снимок экрана 2024-12-19 211849.png" alt="" />
              </div>
              <ul className={s.chartLegend}>
                <p>
                  <img src="" alt="" />
                  <span>Sport Car</span> 17,439
                </p>
                <p>
                  <img src="" alt="" />
                  <span>SUV</span>
                  9,478
                </p>{' '}
                <p>
                  <img src="" alt="" />
                  <span>Coupe</span>
                  18,197
                </p>{' '}
                <p>
                  <img src="" alt="" />
                  <span>Hatchback</span>
                  12,510
                </p>{' '}
                <p>
                  <img src="" alt="" />
                  <span>MPV</span>
                  14,406
                </p>
              </ul>
            </div>
          </div>
        </div>

        <div className={s.bottomSection}>
          <div className={s.recentTransactions}>
            <div className={s.transactionsHeader}>
              <h2>Recent Transaction</h2>
              <a href="/transactions">View All</a>
            </div>
            <ul className={s.transactionsList}>
              <li>
                <img src="https://via.placeholder.com/80" alt="Nissan GT - R" />
                <div>
                  <h4>Nissan GT - R</h4>
                  <p>Sport Car</p>
                </div>
                <span>$80.00</span>
              </li>
              <li>
                <img src="https://via.placeholder.com/80" alt="Koenigsegg" />
                <div>
                  <h4>Koenigsegg</h4>
                  <p>Sport Car</p>
                </div>
                <span>$99.00</span>
              </li>
              <li>
                <img src="https://via.placeholder.com/80" alt="Rolls - Royce" />
                <div>
                  <h4>Rolls - Royce</h4>
                  <p>Sport Car</p>
                </div>
                <span>$96.00</span>
              </li>
              <li>
                <img src="https://via.placeholder.com/80" alt="CR - V" />
                <div>
                  <h4>CR - V</h4>
                  <p>SUV</p>
                </div>
                <span>$80.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarRental;
