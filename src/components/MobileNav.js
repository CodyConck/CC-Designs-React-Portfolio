import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/cody-headshot.jpeg';
import React from 'react';
import { CgMenuRound, CgCloseO } from 'react-icons/cg'
import { useState } from 'react'

import './mobileNav.css'

function MobileNav(props) {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenuRound
        className="hamburger"
        size='40px' color='white'
        onClick={() => setOpen(!open)}
    />
    const closeIcon = <CgCloseO
        className="hamburger"
        size='40px' color='white'
        onClick={() => setOpen(!open)}
    />
    const closeMenu = () => setOpen(false);
    
    return (
        <Navbar className="mobile" bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand className="picture">
                    <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                    Cody Concklin
                </Navbar.Brand>

                {open ? closeIcon : hamburgerIcon}
                {open && <Nav className="mr-auto">
                    <Nav.Link onClick={() => props.handlePageChange('About') + closeMenu()} href="#home">About</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('Projects') + closeMenu()} href="#home">Projects</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('Resume') + closeMenu()} href="#home">Resume</Nav.Link>
                    <Nav.Link onClick={() => props.handlePageChange('Contact') + closeMenu()} href="#home">Contact</Nav.Link>
                 </Nav>}
            </Container>
        </Navbar>
    )
}

export default MobileNav