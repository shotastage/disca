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

const barHeight = "5rem";

const MenuBar = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  margin-top: 1em;
  background: #fff;
  height: ${barHeight};
  line-height: ${barHeight};
  margin: 1.5em;
  margin-bottom: 1.2em;
  margin-left: 0;
  background: #333;
`;


const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;


const MenuListItem = styled.li`
  list-style: none;
  width: 10rem;
  height: auto;
  line-height: auto;
  color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 20px;
  text-align: center;
  background: #f7274a;
  border-radius: 40px;
  -webkit-transition: all .3s;
  -moz-transition: all .3s;
  transition: all .3s;
`;


const MenuItemLink = styled.a`
  color: white;
  height: ${barHeight} - 2rem;
  line-height: ${barHeight} - 2rem;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  padding-left: 10px;
  padding-right: 10px;

        &:hover {
            text-decoration: none;
            color: white;
        }

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
