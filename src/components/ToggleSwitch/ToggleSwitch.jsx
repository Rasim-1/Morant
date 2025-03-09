import { useState } from 'react';
import s from './ToggleSwitch.module.scss'; 

const ToggleSwitch = () => {
  const [isDay, setIsDay] = useState(true);

  const toggleSwitch = () => {
    setIsDay(!isDay);
  };

  return (
    <div className={s.toggleSwitch} onClick={toggleSwitch}>
      <div className={`${s.circle} ${isDay ? s.day : s.night}`}>
        {isDay ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="#ffffff"
          >
            <circle cx="12" cy="12" r="5" />
            <g>
              <line
                x1="12"
                y1="1"
                x2="12"
                y2="4"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="12"
                y1="20"
                x2="12"
                y2="23"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="4.22"
                y1="4.22"
                x2="6.34"
                y2="6.34"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="17.66"
                y1="17.66"
                x2="19.78"
                y2="19.78"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="1"
                y1="12"
                x2="4"
                y2="12"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="20"
                y1="12"
                x2="23"
                y2="12"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="4.22"
                y1="19.78"
                x2="6.34"
                y2="17.66"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="17.66"
                y1="6.34"
                x2="19.78"
                y2="4.22"
                stroke="white"
                strokeWidth="2"
              />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="#708090"
          >
            <path d="M21.64 13.57A9 9 0 1110.43 2.36a7 7 0 1011.21 11.21z" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default ToggleSwitch;
