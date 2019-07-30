import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './pages/adduser'
import GoogleAuth from './component/googleAuth'

function App() {
  return (
    <div className="App">
      <User />
      <GoogleAuth/>
    </div>
  );
}

export default App;
