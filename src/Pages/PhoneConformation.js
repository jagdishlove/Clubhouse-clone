import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import style from "../style/phoneConfirm.module.css";

function PhoneConformation() {
  const [value, setValue] = useState();

  return (
    <div className={style.phoneConfirmContainer}>
      <Link exact to="/" className={style.backBttn}>
        <img src="/images/arrow.png" alt="" />
      </Link>
      <h1>Enter your Phone</h1>
      <PhoneInput
        international
        defaultCountry="IN" 
        value={value}
        onChange={setValue}
      />
      <p>
        By entering your number, your're agreeing to put{" "}
        <span>Term of Service and Policy. </span>
        Thanks!
      </p>
      <Link
        exact
        to="/code_confirm"
        className="primaryBtn d-flex align-items-center"
      >
        Next 
        <img src="/images/nextArrowIcon.svg" className="" alt=" " />
      </Link>
    </div>
  );
}

export default PhoneConformation;
