import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoggedInRouter } from './router/logged-in-router';
import { LoggedOutRouter } from './router/logged-out-router';

function App() {
  const isLoggedIn = true;
  return (
    isLoggedIn ? 
      <LoggedInRouter></LoggedInRouter>
      :
      <LoggedOutRouter></LoggedOutRouter>
  );
}

export default App;
