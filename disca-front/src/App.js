import React from 'react';
import styled from 'styled-components';
import { NavbarWidget } from './components/Navbar';
import { DSCard, DSCardTitle } from './components/Card';
import { Container, Row, Col } from 'react-bootstrap';
import DestyledLink from './components/DestyledLink';
import BgSymbol from './components/BackgroundSymbol';
import { CircleButton } from './components/Buttons';
import axios from 'axios';



const Heading = styled.h1`
  height: 100%;
  line-height: 100%;
  font-weight: bold;
  font-size: 3.5rem;
  margin-left: 50px;
`;


const getTeamData = async () => {
  try {
    const result = await axios.get('http://127.0.0.1:8000/team/');

    return result;
  } catch (error) {
    console.log("error!!");
  }
};



const PrepareData = ()  => {

  let recievedData = [];
  let splitData = [];
  let renderStructure = [];


  recievedData = [
    {name: "NECO", description: "研究くらい自分でしろや"}, {name: "NECO", description: "エビデンスくらい自分で設計しろや"}, {name: "NECO", description: "研究くらいしろや"}, {name: "NECO", description: "研究くらいしろや"},{name: "NECO", description: "研究くらいしろや"}, {name: "NECO", description: "研究くらいしろや"}, {name: "NECO", description: "研究くらいしろや"},
  ];

  for (var i = 0; i < recievedData.length; i++) {
      splitData.push(recievedData[i])

      if (( i !== 0 && i % 3 === 0) || i === recievedData.length - 1) {
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
    this.setState({
      teams: PrepareData(),
    })
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
                    <DestyledLink to="/team/">
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
