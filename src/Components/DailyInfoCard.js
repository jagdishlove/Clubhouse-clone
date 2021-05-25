import React from "react";
import style from "../style/dailyInfoCard.module.css";
import Data from "../Data/dailyCard.json";

function DailyinfoCard() {
  console.log(Data);
  return (
    <div className={style.dailyCard}>
      {Data.map((item) => (
        <div>
        <div className={style.time}>
          <span>{item.time}</span>
          </div>
          <div className={style.title_des}>
          <span>{item.title}</span>
          <p>{item.description}</p>
        </div>
        </div>
        
      ))}
    </div>
  );
}

export default DailyinfoCard;
