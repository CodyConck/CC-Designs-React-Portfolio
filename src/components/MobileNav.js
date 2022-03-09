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

    return (
        <Navbar className="mobile" bg="dark" variant="dark" >
            <Navbar.Brand href="#home" className="picture">
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

                <Nav.Link onClick={() => props.handlePageChange('About')} href="#home">About</Nav.Link>
                <Nav.Link onClick={() => props.handlePageChange('Projects')} href="#home">Projects</Nav.Link>
                <Nav.Link onClick={() => props.handlePageChange('Resume')} href="#home">Resume</Nav.Link>
                <Nav.Link onClick={() => props.handlePageChange('Contact')} href="#home">Contact</Nav.Link>
            </Nav>}

        </Navbar>
    )
}

export default MobileNav