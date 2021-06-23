import React,{useState} from 'react'
import DailyinfoCard from '../Components/DailyInfoCard'
import Header from '../Components/Header'
import style from '../style/home.module.css'
import RoomInfoCard from '../Components/RoomInfoCard'
import {AiOutlinePlus} from "react-icons/ai";
import {BsGrid3X3Gap} from "react-icons/bs";
import data from "../Data/roomCard.json"

function Home() {
    return (
        <div>
          <Header/>
          <div className={style.home_container}>

          <DailyinfoCard/>
          <RoomInfoCard/>
          </div>
          <div className={style.action_btn}>
            <button>
              <AiOutlinePlus className="mr-2"/>
              Start a room
            </button>
            <button>
              <BsGrid3X3Gap/>
            </button>
          </div>
        </div>
    )
}

export default Home
