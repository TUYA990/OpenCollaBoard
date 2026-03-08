import io from 'socket.io-client';

const socket = io('https://tuya-backend-final.onrender.com');

export { socket };
