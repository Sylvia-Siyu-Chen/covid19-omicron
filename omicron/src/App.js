import logo from './logo.svg';
import React, { Component }  from 'react';
import Home from './components/Home';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom';
import {Nav, Narbar, Navbar} from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar bg='dark' variant='dark' className='navbar' sticky='top'/>
        <Navbar.Brand href = '/'>WELCOME</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      <Login/>
    </div>
  );
}

export default App;
