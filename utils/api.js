import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// إذا كنت تستخدم التوكن (Token) لاحقاً للمصادقة، يمكنك إضافة ميزة الـ Interceptors هنا بسهولة
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;