import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';  
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { ToastContainer } from 'react-toastify';

const store = configureStore({
  reducer: {
    user: authReducer,
  },
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>  
    <App />
    <ToastContainer/>
  </Provider>
);
