import React from 'react';
import styled from 'styled-components';
import { NavbarWidget } from './components/Navbar';
import { Container, Row, Col } from 'react-bootstrap';



const Heading = styled.h1`
  font-weight: bold;
  font-size: 3.5rem;
`;


function Team() {
  return (
    <>
      <NavbarWidget/>
      <Container>
        <Row>
          <Col md={6}>
            <Heading>NECO Team</Heading>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Team;
