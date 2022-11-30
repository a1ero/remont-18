import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

function App() {

  return (
    <BrowserRouter>
      <Header/>
    </BrowserRouter>   
  );
};

export default App;