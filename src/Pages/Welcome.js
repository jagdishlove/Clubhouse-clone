import React from "react";
import style from "../style/welcome.module.css";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.WelcomeInfo}>
        <p>
          Clubhouse is an invitation-only social media app for iOS and Android
          that facilitates auditory communication through rooms that can
          accommodate groups of up to 5,000 people.
        </p>
        <p>
          Clubhouse is an invitation-only social media app for iOS and Android
          that facilitates auditory communication through rooms that can
          accommodate groups of up to 5,000 people.
        </p>
        <p>Jagdish, mehra Clubhouse Team</p>
      </div>
      <div className={style.actionBtn}>
        <Link
          exact
          to="/invite"
          className="primaryBtn d-flex align-items-center mb-3"
          
        >Get your username </Link>

        <Link>Have an invite text? Sign in</Link>
      </div>
    </div>
  );
}
