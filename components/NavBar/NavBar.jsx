import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import s from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={s.NavBar}>
 <div className="container">
 <div className={s.Mainmenu}>
        <h4>M A I N M E N U</h4>
        <div className={s.item}>
          <img src="https://www.svgrepo.com/show/497195/home.svg" alt="" />
          <b>Dashboard</b>
        </div>
        <div className={s.item}>
          <img
            src="https://static-00.iconduck.com/assets.00/car-icon-256x246-dis9v9eh.png"
            alt=""
          />
          <b>Car Rent</b>
        </div>
        <div className={s.item}>
          <img
            src="https://cdn.icon-icons.com/icons2/3862/PNG/512/chart_icon_240868.png"
            alt=""
          />
          <b>Insight</b>
        </div>
        <div className={s.item}>
          <img
            src="https://www.svgrepo.com/show/497065/empty-wallet-change.svg"
            alt=""
          />
          <b>Reimburse</b>
        </div>
        <div className={s.item}>
          <img
            src="https://static-00.iconduck.com/assets.00/message-icon-2043x2048-z7d1f8at.png"
            alt=""
          />
          <b>Inbox</b>
        </div>
        <div className={s.item}>
          <img
            src="https://static-00.iconduck.com/assets.00/calendar-icon-929x1024-te89oc67.png"
            alt=""
          />
          <b>Calendar</b>
        </div>

        <h4>P R E F E R E N C E S</h4>
        <div className={s.item}>
          <img
            src="https://static-00.iconduck.com/assets.00/setting-icon-470x512-hfr09whu.png"
            alt=""
          />
          <b>Settings</b>
        </div>
        <div className={s.item}>
          <img
            src="https://www.svgrepo.com/show/497209/info-circle.svg"
            alt=""
          />
          <b>Help & Center</b>
        </div>
        <div className={`${s.item} ${s.darkMode}`}>
          <img
            src="https://static-00.iconduck.com/assets.00/briefcase-icon-1002x1024-6w35gtfl.png"
            alt=""
          />
          <b>Dark Mode</b>
          <ToggleSwitch />  
        </div>
        <div className={s.item}>
          <img
            src="https://cdn.icon-icons.com/icons2/3869/PNG/512/logout_icon_243542.png"
            alt=""
          />
          <b>Log Out</b>
        </div>
      </div>
 </div>
    </div>
  );
};

export default NavBar;
