import socketIOClient from "socket.io-client";
const Socket = () => socketIOClient(process.env.BACKEND_API!);
export default Socket;
