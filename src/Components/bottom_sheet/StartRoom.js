import React,{useState} from 'react'
import style from '../../style/bottomSheet.module.css';
import {FcGlobe} from "react-icons/fc";

function StartRoom(props) {
    const[room, setRoom]= useState("open");
    return (
        <>
            <div className={style.switch_Line}></div>
            <div className="text-right">
                <button className={style.addTopicBtn}>+ add a topic</button>
            </div>
        </>
    )
}

export default StartRoom
