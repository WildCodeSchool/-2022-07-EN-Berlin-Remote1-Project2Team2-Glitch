import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Start from "./Components/Start";
import Room from "./Components/Room";
import Round from "./Components/Round";
import Guessed from "./Components/Guessed";
import client from './websocket.js';
import axios from 'axios';

function App() {

  const [room, setRoom] = useState(null);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [performer, setPerformer] = useState({});
  const [gameStarted, setGameStarted] = useState(false);
  const [roundStarted, setRoundStarted] = useState(false);
  const [guessed, setGuessed] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [isPerformer, setIsPerformer] = useState(false);
  const [isLogged, setIsLogged] = useState(false);


  client.onmessage = message => {
    const data = JSON.parse(message.data);
    //console.log(data.event);
    switch (data.event) {
      case 'USER_JOINED':
        getUsers();
        break;

      case 'GAME_STARTED':
        setGameStarted(true);
        break;

      case 'ROUND_STARTED':
        setIsPerformer(currentUser.userId === data.perf.userId);
        setPerformer(data.perf);
        setRoundStarted(true);
        setGuessed(false);
        break;
      
      case 'WORD_GUESSED':
          setGuessed(true);
          break;
      case 'ROUND_ENDED':
        setRoundStarted(false);
        setIsPerformer(false);
        break;

      case 'GAME_ENDED':
        setGameStarted(false);
        break;
      default:


    }
  }


  const createRoom = () => {
    axios.post('http://localhost:8000/rooms')
      .then(res => { setRoom(res.data) })
  }

  const joinToRoom = (newUser) => {
    
    axios.post('http://localhost:8000/users', {...newUser, room})
      .then(res => { setCurrentUser(res.data) });
  }

  const getUsers = () => {
    axios.get('http://localhost:8000/users')
      .then(res => { setUsers(res.data) })
  }

  const changeEvent = (event) => {
    console.log(event);
    axios.get(`http://localhost:8000/events/${event}`)
      .then(res => { })
  }


  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Start setIsOwner={setIsOwner} createRoom={createRoom} joinToRoom={joinToRoom} room={room} />} />
            <Route path="/room/:id" element={ roundStarted ? <Navigate to={`/room/${room}/round`}/> : <Room changeEvent={changeEvent} setRoom={setRoom} users={users} isOwner={isOwner} joinToRoom={joinToRoom} isLogged={isLogged} setIsLogged={setIsLogged} />} />
            <Route path="/room/:id/round" element={ guessed ? <Navigate to={`/room/${room}/guessed`}/> : <Round room={room} changeEvent={changeEvent} isPerformer={isPerformer} performer={performer} />} />
            <Route path="/room/:id/guessed" element={<Guessed room={room} setGuessed={setGuessed}/>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;