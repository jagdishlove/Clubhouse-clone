import React, { useState } from 'react'
import style from '../../style/bottomSheet.module.css';
import { FcGlobe, FcLock } from "react-icons/fc";
import { RiTeamFill } from "react-icons/ri"

function StartRoom(props) {
    const [room, setRoom] = useState("open");
    return (
        <>
            <div className={style.switch_Line}></div>
            <div className="text-right">
                <button className={style.addTopicBtn}>+ add a topic</button>
            </div>
            <div className={style.selectRoom}>
                <button className={room === 'open' ? style.active : ""}
                    onClick={() => setRoom("open")}
                >
                    <div>
                        <FcGlobe />

                    </div>
                    Open
                </button>
                <button className={room === "social" ? style.active : ""}
                    onClick={() => setRoom("social")}>
                    <div>
                        <RiTeamFill />
                    </div>
                    Social
                </button>
                <button className={room === "closed" ? style.active : ""}
                    onClick={() => setRoom("closed")}>
                    <div>

                        <FcLock />
                    </div>
                    Closed
                </button>
            </div>
            <p>Start a room <span>{room === "closed"
                ? "for people i choose"
                : room === "social"
                    ? "with people I follow"
                    : "open to everyone"}
            </span></p>
            <div className="text-center">
                <button className={style.letGoBtn}
                    onClick={() => {
                        props.setSheetCreateRoom(true);
                        props.setSheetVisible(true);
                    }}>Let's Go</button>
            </div>
        </>
    )
}

export default StartRoom
