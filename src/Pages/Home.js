import React from 'react'
import DailyinfoCard from '../Components/DailyInfoCard'
import Header from '../Components/Header'
import style from '../style/home.module.css'

function Home() {
    return (
        <div>
          <Header/>
          <div className={style.home_container}>

          <DailyinfoCard/>
          </div>
        </div>
    )
}

export default Home
