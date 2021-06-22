import React from 'react'
import DailyinfoCard from '../Components/DailyInfoCard'
import Header from '../Components/Header'
import style from '../style/home.module.css'
import RoomInfoCard from '../Components/RoomInfoCard'

function Home() {
    return (
        <div>
          <Header/>
          <div className={style.home_container}>

          <DailyinfoCard/>
          <RoomInfoCard/>
          </div>
        </div>
    )
}

export default Home
