import React, { useState } from 'react'
import DailyinfoCard from '../Components/DailyInfoCard'
import Header from '../Components/Header'
import style from '../style/home.module.css'
import RoomInfoCard from '../Components/RoomInfoCard'
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import data from "../Data/roomCard.json"
import BottomSheet from '../Components/BottomSheet'

function Home() {

  const [itemVisible, setItemVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1);

  return (
    <div>
      <Header />
      <div className={style.home_container}>

        <DailyinfoCard />
        <RoomInfoCard />
      </div>
      <div className={style.action_btn}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className="mr-2" />
          Start a room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>
      <BottomSheet
        sheetTitle='start room'
        setSheetVisible={(item) => setSheetVisible(item)}
        sheetVisible={sheetVisible}
        cardDetail={data.find((item)=> item.id ==cardId)}
      setItemVisible={(item) => setItemVisible(item)}
      setSheetCreateRoom={(item) => {
        setLoaderVisibility(true);
        setTimeout(() => {
          setSheetCreateRoom(item);
          setLoaderVisibility(false);
        }, 1000);
      }}
          />
    </div>
  )
}

export default Home
