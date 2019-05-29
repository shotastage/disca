import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import { NavbarWidget } from './components/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import BgSymbol from './components/BackgroundSymbol';


// For debug
import bg from './assets/sample.png';



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
          <Col md={12}>
            <Heading>なんでやねーん！</Heading>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h1>アプリ一覧</h1>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Image src={bg} roundedCircle/>
          </Col>
          <Col md={3}>
            <Image src={bg} roundedCircle/>
          </Col>
          <Col md={3}>
            <Image src={bg} roundedCircle/>
          </Col>
          <Col md={3}>
            <Image src={bg} roundedCircle/>
          </Col>
        </Row>
      </Container>
      <BgSymbol/>
    </>
  );
}

export default Team;
