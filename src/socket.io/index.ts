import socketIOClient from "socket.io-client";
const socket = socketIOClient("localhost:9011");
export default socket;
