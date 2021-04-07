import socketIOClient from "socket.io-client";
const socket = socketIOClient("localhost:9010");
export default socket;
