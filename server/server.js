import path from "path";
import http from 'http';
import express, {json} from "express";
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import WebSocket, { WebSocketServer } from 'ws';

const app = express();
app.use(json());
app.use(cors());

const httpServer = http.createServer(app);
const ws = new WebSocketServer({ server: httpServer });
httpServer.listen(process.env.PORT || 8000, function () {
  console.log("App listening at 8000 port");
});

const clients = [];
const rooms = [];
const users = [];


app.get("/", (req, res) => {
  res.send("GET method");
});

app.get("/users", getUsers);
app.post("/rooms", createRoom);
app.post("/users", userJoin);
app.get("/events/:event", eventHandler);

function getPerformer() {
  return users[Math.floor(Math.random() * users.length)];
}

function getUsers(req, res) {
  res.status(200).send(users);
}

function createRoom(req, res) {
  const roomId = uuidv4();
  rooms.push(roomId);
  res.status(200).send(roomId);
}

function userJoin(req, res) {
  const userId = uuidv4();
  const newUser = {userId, ...req.body};
  users.push(newUser);
  sendEvent({event: 'USER_JOINED'});
  res.status(200).send(newUser);
}

function eventHandler(req, res) {
  const data = {event: req.params.event};
  if(req.params.event === 'ROUND_STARTED') data.perf = getPerformer();
  console.log(data);
  sendEvent(data);
  res.status(200).send(data);
}

function sendEvent(data) {
  clients.forEach( (socket) => socket.send(JSON.stringify(data)));
}

ws.on("connection", function (socket) {
  
  clients.push(socket);

});

/*
TODO
- delete closed sockets
- add error handling 
*/