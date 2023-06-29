
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import axios from 'axios';



const promise = axios.get('https://studies.cs.helsinki.fi/restcountries/api/all');
console.log(promise);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
