import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import { LoginDataProvider } from './contexts/LoginDataContext';
import { Routes } from './pages';

function App() {
  return (
    <LoginDataProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes />
        </main>
      </BrowserRouter>
    </LoginDataProvider>
  );
}

export default App;
