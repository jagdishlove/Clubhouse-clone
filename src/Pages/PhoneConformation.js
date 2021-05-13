import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../style/phoneConfirm.module.css";

function PhoneConformation() {
  const [value, setValue] = useState();

  return (
    <div className={style.phoneConfirmContainer}>
      <h1>Enter your Phone</h1>
      <p>
        By entering your number, your're agreeing to put{" "}
        <spam>Term of Service and Policy. </spam>
         Thanks!
      </p>
    </div>
  );
}

export default PhoneConformation;
