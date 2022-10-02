import React, { useState, useRef, useEffect } from "react";
import ListOFUsers from "./ListOfUsers";
import { useParams, Link } from 'react-router-dom';
import './Room.css'
import icon from '../assets/copied.png';
import { getRandomFullName } from '../const';


function Room(props) {

    const { users, isOwner, joinToRoom, isLogged, setIsLogged, changeEvent, setRoom } = props;
    const { id } = useParams();
    const textAreaRef = useRef(null);
    const textAreaRefG = useRef(null);
    const [copySuccess, setCopySuccess] = useState('');
    const [copySuccessG, setCopySuccessG] = useState('');
    const [inputValue, setInputValue] = useState('');

    useEffect( () => setRoom(id), []);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess(<img src={icon} alt="" className="icon" />);
    };
    function copyToClipboardG(e) {
        textAreaRefG.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccessG(<img src={icon} alt="" className="icon" />);
    };

    function handleClick() {
        const newUser = { name: inputValue, fullname: getRandomFullName()};
        joinToRoom(newUser);
        setIsLogged(true);

    }

    function startGame() {
        changeEvent('GAME_STARTED');
        changeEvent('ROUND_STARTED');
    }

    //console.log('render room')
    return (
        <div className="room">
            {isOwner && <>
            <p className="send">Send this link to your friends</p>
            <p>This is link to the game room</p>
            <input className="link" type="url" value={`http://localhost:3000/room/${id}/`} ref={textAreaRef} readOnly></input>
            <button onClick={copyToClipboard} className="but__small">copy</button>
            {copySuccess}
            <br />
            <p>This is link to the Google meet</p>
            <input className="link" type="url" defaultValue={`https://meet.google.com/`} ref={textAreaRefG}></input>
            <button onClick={copyToClipboardG} className="but__small">copy</button>
            {copySuccessG}
            <br />
            </>}
            {!isLogged && (
                <><input
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                    type="text" placeholder="Tell me your name ..." style={{ margin: '20px' }} />

                    <button onClick={handleClick} className="but__small">Join</button></>)}

            <br />
            {isOwner &&
                <Link to={`/room/${id}/round`}>
                    <button onClick={startGame} className="but">Start Game</button>
                </Link>}
            <br />

            <h2>Players:</h2>
            <ListOFUsers users={users} />
            <h2>Waiting for another players...</h2>
        </div>
    )
}

export default Room;
