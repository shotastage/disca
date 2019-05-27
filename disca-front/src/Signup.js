import React from 'react';
import { NavbarWidget } from './components/Navbar';
import { DSCard, DSCardTitle } from './components/Card';
import { Container, Row, Col } from 'react-bootstrap';


function Signup() {
  return (
    <>
      <NavbarWidget/>
      <Container>
        <Row>
          <Col md={5}>
            <DSCard>
              <DSCardTitle>Signup</DSCardTitle>
            </DSCard>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signup;
