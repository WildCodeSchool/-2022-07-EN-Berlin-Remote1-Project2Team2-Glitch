import React from "react";
import VOCABULARY from "./vocabul";
import './RandomWord.css'

function RandomWord () {
    const [word, setWord] = React.useState([]);
    function random (arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }
    React.useEffect( function change () {
        const newWord = random(VOCABULARY);
        setWord(newWord);        
    }  , [])   
    return (
        <div className="word">
            {word}            
        </div>
    )
}

export default RandomWord;