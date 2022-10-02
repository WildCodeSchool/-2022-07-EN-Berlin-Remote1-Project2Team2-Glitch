import React from "react";
import '../App.css';
import Performer from "./Performer";
import Gamers from "./Gamers";

function Round (props) {
    
    const {isPerformer, performer, changeEvent, room} = props;

    return (
        isPerformer ? <Performer changeEvent={changeEvent} room={room}/>: <Gamers performer={performer}/>
    )
}   
    

export default Round;