import React from 'react'
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';


export const DSNavbar = styled(Navbar)`
    background: #fff !important;
    filter: drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.336));
    margin-bottom: 30px;
`;


export const DSNavBrand = styled(Navbar.Brand)`
    font-weight: bold;
`;


export function NavbarWidget() {
    return (
        <DSNavbar bg="light" expand="lg">
        <DSNavBrand href="/">Disca!</DSNavBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </DSNavbar>
    );
}