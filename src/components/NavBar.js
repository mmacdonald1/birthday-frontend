import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

const NavBar = () => {
  return(
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar
