import React, { useContext } from 'react'

import { Link } from "react-router-dom";

import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { AuthContext } from '../Contexts/AuthContext';

function Header() {

  const {user} =useContext(AuthContext)

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/'>Contact App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
    <Nav className="">
      <Nav.Link  as={Link} to='/' >Home</Nav.Link>
      {user ? <>
        <Nav.Link  as={Link} to='/contact'>Contacts</Nav.Link>
      <Nav.Link  as={Link} to='/contact/add'>Add Contact</Nav.Link>
      <Nav.Link  as={Link} to='/logout'>logout</Nav.Link>

      </>
      : 
      <>
       <Nav.Link  as={Link} to='/register'>Register</Nav.Link>
      <Nav.Link  as={Link} to='/login'>Login</Nav.Link>
      </>
      }
     
      <Nav.Link  as={Link} to='/about'>About</Nav.Link>
     
     
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header