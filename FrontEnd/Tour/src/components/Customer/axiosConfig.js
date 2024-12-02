// src/axiosConfig.js
import axios from 'axios';

// Change the port number to match your backend server's port
const backendPort =7070;
const baseURL = `http://localhost:${backendPort}`;

const axiosInstance = axios.create({
    baseURL: baseURL,
});

export default axiosInstance;
