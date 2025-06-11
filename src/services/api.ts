import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5001/api', // usa variável de ambiente ou fallback
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // importante se usa autenticação via cookie/sessão
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // obtém token JWT do localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
