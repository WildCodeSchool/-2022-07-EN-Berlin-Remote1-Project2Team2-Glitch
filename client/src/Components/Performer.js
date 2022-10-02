import React from "react";
import Clock from "./Clock";
import Logo from "./Logo";
import ChuckImg from "./ChuckImg";
import "../App.css";
import RandomWord from "./RandomWord";
import { Link } from "react-router-dom";

function Performer(props) {

  const {changeEvent, room} = props;

  function handleStop() {
      // setStyle({
      //   backgroundImage: "none",
      // });
      console.log('guessed click');
      changeEvent('WORD_GUESSED');    
      changeEvent('ROUND_ENDED');
  };

  return (
    <>
      <Logo />
      <div className="perf">
        <h3>CONGRATULATIONS</h3>
        <h4>You are the next to perform the word and other gamers should guess it. I can do it just in 1 second. Try to be better then me.</h4>
        <h2>You  have 120 sec.</h2>
        <h1>Your word is:</h1>
        <RandomWord />
        <Clock />

        <div className="button">
            <button className="timer__button" onClick={handleStop}>The word is guessed</button>
        </div>
        <ChuckImg />
      </div>
    </>
  );
}

export default Performer;
