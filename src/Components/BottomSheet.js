import React from 'react'
import SwipeableBottomSheet from "react-swipeable-bottom-sheet"
import style from "../style/bottomSheet.module.css";

function BottomSheet(props) {
    return (
        <SwipeableBottomSheet
        open={props.sheetVisible}
        onChange={()=>{
            props.setSheetVisible(!props.sheetVisible)
            props.setItemVisible(true)
        }}
        fullScreen={props.sheetTitle == "room detail" ? true: false}
        >
            <div 
            className={style.BottomSheeetContainer} style={{
                backgroundColor:props.sheetTitle == "profile" ? "transparent":" "
            }}>

            </div>
        </SwipeableBottomSheet>
    )
}

export default BottomSheet