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



class Team extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      teams: [],
    }
  }


  componentDidMount() {

    let url = window.location.href

    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({ teams: data[0] })
      })
      .catch(console.log)
  }


  render() {
    return (
      <>
        <NavbarWidget/>
        <Container>
          <Row>
            <Col md={12}>
              <Heading>{this.state.teams.name}</Heading>
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
}


export default Team;
