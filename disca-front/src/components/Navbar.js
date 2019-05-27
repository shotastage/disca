import React from 'react'
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';



export const DSNavbar = styled(Navbar)`
    background: #fff !important;
    filter: drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.336));
`;


export const DSNavBrand = styled(Navbar.Brand)`
    font-weight: bold;
`;


export function NavbarWidget() {
    return (
        <DSNavbar bg="light" expand="lg">
        <DSNavBrand href="#home">Disca!</DSNavBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </DSNavbar>
    );
}