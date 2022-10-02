import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from "./Logo";
import ChuckImg from "./ChuckImg";
import "../App.css";


function Start(props) {

    const { createRoom, room, setIsOwner } = props;

    useEffect(() => { createRoom() }, [])
    
    const handleClick = () => {
        setIsOwner(true);
    }

    return (
        <div>
            <Logo />
            <br />
            <div className='start'>
                <h1>Hello</h1>
                <h2>Welcome to <span className='startOne'>Chuck</span><span className='startTwo'>agator</span></h2>
                <br />
                <Link to={`/room/${room}`}>
                    <button onClick={handleClick} className="but"> Create game </button>
                </Link>
            </div>
            <ChuckImg />
        </div>
    )
}

export default Start;