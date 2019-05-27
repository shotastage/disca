import React from 'react';
import { NavbarWidget } from './components/Navbar';
import { DSCard, DSCardTitle } from './components/Card';
import { Container, Row, Col } from 'react-bootstrap';


function Team() {
  return (
    <>
      <NavbarWidget/>
      <Container>
        <Row>
          <Col md={3}>
            <DSCard body>
              <DSCardTitle>NECO</DSCardTitle>
              <p>
                Description text is here!
              </p>
            </DSCard>
          </Col>
          
          <Col md={3}>
            <DSCard body>
              <DSCardTitle>データーベース概論</DSCardTitle>
              <p>
                Description text is here!
              </p>
            </DSCard>
          </Col>
          <Col md={3}>
            <DSCard body>
              <DSCardTitle>React Meet</DSCardTitle>
              <p>
                Description text is here!
              </p>
            </DSCard>
          </Col>
          <Col md={3}>
            <DSCard body>
              <DSCardTitle>Django Up!</DSCardTitle>
              <p>
                Description text is here!
              </p>
            </DSCard>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Team;
