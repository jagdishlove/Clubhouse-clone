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
            <div className={style.selectRoom}>
                <button className={room =='open' ? style.active:""}
                onClick={()=>setRoom("open")}
                >
                    <div>
                        <FcGlobe/>
                        
                    </div>
                    Open
                </button>
                <button className={room =="social" ? style.active:""}
                onClick={()=> setRoom("social")}>
                    <div>
                        <FcGlobe/>
                    </div>
                    Social
                </button>
                <button className={room =="closed" ? style.active:""}
                onClick={()=> setRoom("closed")}>
                    <div>
                        <FcGlobe/>
                    </div>
                    Closed
                </button>
            </div>
        </>
    )
}

export default StartRoom
