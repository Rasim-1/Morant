import React, { useState, useEffect } from "react";
import s from './Chart.module.scss';

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Chart = () => {
  const data = [
    { name: "Sport Car", value: 17439 },
    { name: "SUV", value: 9478 },
    { name: "Coupe", value: 18197 },
    { name: "Hatchback", value: 12510 },
    { name: "MPV", value: 14406 },
  ];

  const COLORS = ["#0D3559", "#175D9C", "#2185DE", "#63A9E8", "#A6CEF2"];
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${s.wrapper} ${isMobile ? s.mobile : ""}`}>
      <h3>Top 5 Car Rental</h3>
      <div className={s.chartContainer}>
        <PieChart width={isMobile ? 300 : 500} height={isMobile ? 300 : 300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={isMobile ? 60 : 80}
            outerRadius={isMobile ? 100 : 120}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          {!isMobile && (
            <Legend layout="vertical" align="right" verticalAlign="middle" />
          )}
        </PieChart>
        <div className={s.text}>
          <h2 style={{ margin: 0 }}>{total.toLocaleString()}</h2>
          <p style={{ margin: 0 }}>Rental Car</p>
        </div>
        {isMobile && (
          <div className={s.legend}>
            {data.map((item, index) => (
              <div key={index} className={s.legendItem}>

                <span
                  className={s.legendColor}
                  style={{
                    backgroundColor: COLORS[index % COLORS.length],
                  }}
                ></span>
                <span>{item.name}</span> 
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chart;
