import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import axios from 'axios';
import './index.css';


const promise = axios.get('http://localhost:3001/persons');
// const promise2 = axios.get('http://localhost:3001/blabla')

// console.log(promise2)
console.log(promise);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
