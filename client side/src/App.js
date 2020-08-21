import React from 'react';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Login from './components/LoginModal';

function App() {
  return (
    <div 
    className="container"
    style={ { height: "100vh" }}>
      <NavBar/>
      <Content/>
      <Login/>
    </div>
  );
}

export default App;
