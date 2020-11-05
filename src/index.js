import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Navbar from './components/Navbar/Navbar';
import BootNavBar from './components/Navbar/BootNavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Navbar /> */}
      <BootNavBar />
        <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

