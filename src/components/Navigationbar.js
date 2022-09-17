import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';



const Navigationbar = () => {

  return (
    
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link to="/login">Login</Link>
          
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navigationbar;


