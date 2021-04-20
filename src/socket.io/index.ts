import socketIOClient from "socket.io-client";
const socket = socketIOClient(process.env.BACKEND_API!);
export default socket;
