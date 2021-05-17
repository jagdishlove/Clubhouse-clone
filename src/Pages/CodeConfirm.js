import React from 'react'
import style from "../style/phoneConfirm.module.css";
import { Link } from 'react-router-dom'


function CodeConfirm() {
    return (
        <div className={style.phoneConfirmContainer}>
            <Link exact to="/invite" className={style.backBttn}>
                <img src="/images/arrow.png" alt=""/>
            </Link>
            <div className="text-center" >
                <h1 sryle={{ width: '100%', maxWidth: '200px', marginBottom: "1em" }}>Enter the code we send you</h1>
                <input type="text" placeholder="Enter Here"
                style={{width:"80%",border:"none",textAlign:"center", outline:"none"}}/>
                <p className="mt-2">Didn't receive it? <span>Tap to resend.</span></p>
            </div>
            <Link
        exact
        to="/allow_notification"
        className="primaryBtn align-items-center d-flex"
      >
        Next 
        <img src="/images/nextArrowIcon.svg" className="ml-1" alt=" " />
      </Link>


        </div>
    )
}

export default CodeConfirm
