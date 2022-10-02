import React from "react";
import Clock from "./Clock";
import Logo from "./Logo";
import ChuckImg2 from "./ChuckImg2";
import './Gamers.css';

function Gamers (props) {

    const { performer } = props;
    
    return (
        <>  
            <Logo/>
            <div className="gamers">
                
                <h2 className='perf'>Performer is <span className="sp"> {performer.name} {performer.fullname}</span> {}</h2>
                <p>Get ready to guess the word</p>
                <p>Chuck can do it just in 1 second</p>
                <p>You have <span className="sp">120 sec</span> to try </p>
                <div className="chuck2"><ChuckImg2/></div>
            </div>
            <Clock/>
        </>
    )
}

export default Gamers;