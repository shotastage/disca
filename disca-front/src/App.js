import React from 'react';
import { NavbarWidget } from './components/Navbar';
import { DSCard, DSCardTitle } from './components/Card';
import { Container, Row, Col } from 'react-bootstrap';
import DestyledLink from './components/DestyledLink';
import BgSymbol from './components/BackgroundSymbol';
import { CircleButton } from './components/Buttons';
import axios from 'axios';





class App extends React.Component {


  getTeams = () => {
    var teamData = [];

    var splitTeamData = [];

    axios
      .get('http://127.0.0.1:8000/team/')
      .then( response => (teamData = response.data))

    for(let i = 0; i < teamData.length; i += 4){
      splitTeamData.push(teamData.slice(i, i + 4))
    }

    this.setState({teams: splitTeamData})
  }

  constructor(props) {
    super(props)

    this.state = {
      teams: []
    }

    this.getTeams()
  }

  render() {
    return (
      <>
        <NavbarWidget/>
        <CircleButton/>
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
