import React from 'react';
import { NavbarWidget } from './components/Navbar';
import { DSCard, DSCardTitle } from './components/Card';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
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
              <h1>メンヘラ概論</h1>
            </DSCard>
          </Col>
          <Col md={3}>
            <DSCard body>
              <h1>React Meet</h1>
            </DSCard>
          </Col>
          <Col md={3}>
            <DSCard body>
              <h1>Django Up!</h1>
            </DSCard>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
