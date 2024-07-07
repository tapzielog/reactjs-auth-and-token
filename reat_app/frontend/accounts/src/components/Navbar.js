// src/components/Navbar.js
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../css/Navbar.css';


const NavigationBar = ({ handleLogout }) => {
    const handleLogoutClick = () => {
        handleLogout();
    };

    return (
        <Navbar bg="dark" expand="lg" variant="dark" className='mt-2'>
            <Navbar.Brand href="#" className="text-white p-2">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                    <Nav.Link href="#link" className="text-white">Link</Nav.Link>
                    <Nav.Link href="#about" className="text-white">About</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link onClick={handleLogoutClick} className="text-white">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
