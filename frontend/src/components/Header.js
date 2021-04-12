import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar bg='danger' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Pizza Hunt</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Pizza</Nav.Link>
            <Nav.Link href='#link'>Our Staff</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
