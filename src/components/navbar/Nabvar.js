import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Nabvar = () => {
    return (
<Navbar bg="dark" variant="dark" expand="md">
  <Navbar.Brand href="#home">Lab React Trainning</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/idCards">IdCards</Nav.Link>
      <Nav.Link href="/more">More</Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>


    

    )
}

export default Nabvar