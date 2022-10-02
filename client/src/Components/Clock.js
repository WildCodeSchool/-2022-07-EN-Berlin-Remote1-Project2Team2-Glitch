import React from "react";
import { Link , useParams} from 'react-router-dom';
import "./clock.css";
import axios from "axios";


function Clock(props) {
  const { id } = useParams();
  // const [isCounting, setIsCounting] = React.useState(true);
  let [style, setStyle] = React.useState({
    backgroundImage: "linear-gradient(black, transparent)",
  });
  const getPadTime = (time) => time.toString().padStart(2, "0");
  let [time, changeTime] = React.useState(120);
  const minutes = getPadTime(Math.floor(time / 60));
  const seconds = getPadTime(time - minutes * 60);

  React.useEffect(timer, []);

  function timer () {
    const createInterval = setInterval(() => {
      changeTime((time) => (time > 0 ? time - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(createInterval);
    };
  }

  // function handleStop() {
  //   setIsCounting(false);
  //   setStyle({
  //     backgroundImage: "none",
  //   });    
  //   console.log(isCounting);
  //   const message = {event: 'ROUND_ENDED'};               
  //   axios.post('http://localhost:3001/roundended', message);
  // };


  return (
    <div className="main__container">
      <div className="cont">
        <div className="spinner" style={style}></div>
        <div className="numbers">
          <span className="timer__item">{minutes} </span>
          <span className="timer__item">: </span>
          <span className="timer__item">{seconds}</span>
        </div>
      </div>
      {/* <div className="button">
        <Link to={`/room/${id}/guessed`}>
          <button className="timer__button" onClick={handleStop}>The word is guessed</button>
        </Link>
      </div> */}
    </div>
  );
}

export default Clock;
