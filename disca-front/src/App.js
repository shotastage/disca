import React from 'react';
import { NavbarWidget } from './components/Navbar';
import { DSCard, DSCardTitle } from './components/Card';
import { Container, Row, Col } from 'react-bootstrap';
import DestyledLink from './components/DestyledLink';
import BgSymbol from './components/BackgroundSymbol';
import { CircleButton } from './components/Buttons';



function App() {
  return (
    <>
      <NavbarWidget/>
      <CircleButton/>
      <Container>
        <Row>
          
          <Col md={3}>
            <DestyledLink to="/team/">
              <DSCard body>
                <DSCardTitle>NECO</DSCardTitle>
                <p>Description text is here</p>
              </DSCard>
            </DestyledLink>
          </Col>
          <Col md={3}>
            <DestyledLink to="/team/">
              <DSCard body>
                <DSCardTitle>NECO RG TTTT</DSCardTitle>
                <p>
                  Description text is here!
                </p>
              </DSCard>
            </DestyledLink>
          </Col>
          <Col md={3}>
            <DestyledLink to="/team/">
              <DSCard body>
                <DSCardTitle>React Meet</DSCardTitle>
                <p>
                  Description text is here!
                </p>
              </DSCard>
            </DestyledLink>
          </Col>
          <Col md={3}>
            <DestyledLink to="/team/">
              <DSCard body>
                <DSCardTitle>Django Up!</DSCardTitle>
                <p>
                  Description text is here!
                </p>
              </DSCard>
            </DestyledLink>
          </Col>
        </Row>

        <Row>
          
          <Col md={3}>
            <DestyledLink to="/team/">
              <DSCard body>
                <DSCardTitle>NECO</DSCardTitle>
                <p>
                  Description text is here!
                </p>
              </DSCard>
            </DestyledLink>
          </Col>
          <Col md={3}>
            <DestyledLink to="/team/">
              <DSCard body>
                <DSCardTitle>データーベース概論</DSCardTitle>
                <p>
                  Description text is here!
                </p>
              </DSCard>
            </DestyledLink>
          </Col>
        </Row>
      </Container>
      <BgSymbol/>
    </>
  );
}

export default App;
