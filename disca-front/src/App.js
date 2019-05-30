import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { NavbarWidget } from './components/Navbar';
import { DSCard, DSCardTitle } from './components/Card';
import DestyledLink from './components/DestyledLink';
import BgSymbol from './components/BackgroundSymbol';
import { CircleButton } from './components/Buttons';



const Heading = styled.h1`
  height: 100%;
  line-height: 100%;
  font-weight: bold;
  font-size: 3.5rem;
  margin-left: 50px;
`;


const PrepareData = (data)  => {
  let splitData = [];
  let renderStructure = [];

  for (var i = 0; i < data.length; i++) {
      splitData.push(data[i])

      if (( i !== 0 && (i - 3) % 4 === 0) || i === data.length - 1) {
        renderStructure.push(splitData)
        splitData = []
      }
  }

  return renderStructure;
}




class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      teams: [],
    }
  }


  componentDidMount() {
    fetch('http://127.0.0.1:8000/team/')
      .then(res => res.json())
      .then((data) => {
        this.setState({ teams: PrepareData(data) })
      })
      .catch(console.log)
  }

  render() {

    return (
      <>
        <NavbarWidget/>
        <Row>
          <CircleButton/>
          <Heading>Your Team</Heading>
        </Row>
        <Container>
          {this.state.teams.map((data) => {
            return (
              <Row>
                {data.map((elm) => {
                  return (
                    <Col md={3}>
                    <DestyledLink to={"/team/" + elm.identification}>
                      <DSCard body>
                        <DSCardTitle>{elm.name}</DSCardTitle>
                        <p>{elm.description}</p>
                      </DSCard>
                    </DestyledLink>
                  </Col>
                  )
                })}
              </Row>
            )
          })}
  
        </Container>
        <BgSymbol/>
      </>
    );
  }
}

export default App;
