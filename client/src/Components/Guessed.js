import React from "react";
import ChuckImg3 from "./ChuckImg3";
import { Link } from "react-router-dom";
import NewChuck from "./NewChuck";
import './Guessed.css'

function Guessed(props) {

    const {room, setGuessed} = props;

    const handleClick = () => {
        setGuessed(false);
    }

    return (
        <div className="guessed">
            <ChuckImg3 />
            <div className="guessed__words">

                <p>OK! You have surprised me!</p>
                <Link to={`/room/${room}`}>
                    <button onClick={handleClick} className="but">Lets try Once Again</button>
                </Link>
                <NewChuck />
                <p className="giveup">Or you give up?</p>
                <Link to={`/`}>
                    <button className="but">End</button>
                </Link>            
            </div>
            
        </div>
    )
}

export default Guessed;