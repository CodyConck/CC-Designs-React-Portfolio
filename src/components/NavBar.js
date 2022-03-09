import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/cody-headshot.jpeg';
import React from 'react';

import './mobileNav.css'

function NavBar(props) {
    return (
        <Navbar className="webNav" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
      Cody Concklin
      </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => props.handlePageChange('About')} href="#home">About</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('Projects')} href="#home">Projects</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('Resume')} href="#home">Resume</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('Contact')} href="#home">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar