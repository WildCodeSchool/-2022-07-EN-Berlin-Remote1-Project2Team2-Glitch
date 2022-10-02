import { w3cwebsocket as W3CWebSocket } from "websocket";

const webSocketServerURL = 'ws://localhost:8000';
let client = new W3CWebSocket(webSocketServerURL);

let interval = undefined;

function startWSClient() {

    clearInterval(interval);

    // ready states: 0 - connecting, 1 - open, 2 - closing, 3 - closed
    if (client.readyState !== 1 && client.readyState !== 0) {
        client = new W3CWebSocket(webSocketServerURL);
    }

    client.onopen = function () {
        console.log('WebSocket Client Connected');
    };


    client.onclose = (event) => {
        //console.log(event.wasClean);
        if (!event.wasClean) {
            console.log('WebSocket Client is closed. Reconnect will be attempted in 1 second.', event.reason);
            interval = setInterval(function () {
                startWSClient();
            }, 1000)
        }
    }

};

startWSClient();

export default client;