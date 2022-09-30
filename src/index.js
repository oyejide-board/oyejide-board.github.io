import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav';
import reportWebVitals from './reportWebVitals';
import Rfetch from './Rfetch';
import Navs from './Navs';
import Home from './Home';
import Red from './Red';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navs/>
    <Home/>
    <Red/>
    <Nav />
    <Rfetch/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
