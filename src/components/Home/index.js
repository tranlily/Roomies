import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { withAuthorization } from '../Session';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: '',
      firstName: '',
      lastName: '',
      school: '',
      standing: '',
    };

  };

  componentDidMount() {
    this.props.firebase.getProfileInfo((profileInfo) => {
      this.setState(profileInfo);
      console.log(profileInfo)
    });
  }

  render = () => (
    <Container>
      <Alert variant="dark">
        Check out these sweet Roomies!
        </Alert>
      <Row>
        <Col sm>            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://dailytitan.com/wp-content/uploads/2017/08/starbucks.jpg" />
          <Card.Body>
            <Card.Title>Tuffy Titan</Card.Title>
            <Card.Text>
              Hi, I'm Tuffy the Titan and I'm looking for a cool Roomie!
                        <br />
              California State University, Fullerton
                        <br />
              Class of 2020
    </Card.Text>
          </Card.Body>


          <Card.Footer>


            <Button variant="light" size="sm"> Favorite 	&#127775; </Button>

            <br />
            <small className="text-muted">Last updated 2 days ago</small>
          </Card.Footer>
          {/* <Button variant="light" size="sm"> See More </Button> */}
        </Card></Col>
        <Col sm>            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.redd.it/l35v47at80a41.jpg" />
          <Card.Body>
            <Card.Title>Lily Tran</Card.Title>
            <Card.Text>
              I want a nice Roomie that also likes ice cream.
                        <br />
              California State University, Fullerton
                        <br />
              Class of 2020
    </Card.Text>
          </Card.Body>

          <Card.Footer>


            <Button variant="light" size="sm"> Favorite 	&#127775; </Button>

            <br />
            <small className="text-muted">Last updated 3 days ago</small>
          </Card.Footer>
          {/* <Button variant="light" size="sm"> See More </Button> */}
        </Card></Col>
        <Col sm>            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://mypotatogames.com/wp-content/uploads/2019/10/Animal_crossing_new_Horizons_Filbert.jpeg" />
          <Card.Body>
            <Card.Title>Filbert Squirrel</Card.Title>
            <Card.Text>
              Any Roomies that major in Art? Add me to your Favorites!
                        <br />
              University of California, Riverside
                        <br />
              Class of 2024
    </Card.Text>
          </Card.Body>

          <Card.Footer>


            <Button variant="light" size="sm"> Favorite 	&#127775; </Button>

            <br />
            <small className="text-muted">Last updated 4 days ago</small>
          </Card.Footer>
          {/* <Button variant="light" size="sm"> See More </Button> */}
        </Card></Col>
      </Row>

      <br />

      <Row>
        <Col sm>            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://vignette.wikia.nocookie.net/animalcrossing/images/0/04/Sherb_Poster_NH.png/revision/latest?cb=20200319185254" />
          <Card.Body>
            <Card.Title>Sherb Goat</Card.Title>
            <Card.Text>
              Hi, I'm a sleepy sleeper. I like to sleep and want a Roomie who also sleeps a lot.
                        <br />
              University of California, Irvine
                        <br />
              Class of 2021
    </Card.Text>
          </Card.Body>

          <Card.Footer>


            <Button variant="light" size="sm"> Favorite 	&#127775; </Button>

            <br />
            <small className="text-muted">Last updated 5 days ago</small>
          </Card.Footer>
          {/* <Button variant="light" size="sm"> See More </Button> */}
        </Card></Col>
        <Col sm>            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/ZT6R3ae2rA3U_v1oXvjDl1Ihz18=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19915760/raymond.jpeg" />
          <Card.Body>
            <Card.Title>Raymond Cat</Card.Title>
            <Card.Text>
              Only cool Roomies can DM me.
                        <br />
              University of California, San Diego
                        <br />
              Class of 2022
    </Card.Text>
          </Card.Body>

          <Card.Footer>


            <Button variant="light" size="sm"> Favorite 	&#127775; </Button>

            <br />
            <small className="text-muted">Last updated 5 days ago</small>
          </Card.Footer>
          {/* <Button variant="light" size="sm"> See More </Button> */}
        </Card></Col>
        <Col sm>            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/QSABD_fqPh_je3BYVfFelLgUSfE=/0x0:675x450/1400x1400/filters:focal(0x0:675x450):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/50414045/pikachu_wide.0.0.jpg" />
          <Card.Body>
            <Card.Title>Stephani Michel</Card.Title>
            <Card.Text>
              Senior. CS Major. Looking for friendly roomie.
                        <br />
              California State University, Fullerton
                        <br />
              Class of 2021
    </Card.Text>
          </Card.Body>

          <Card.Footer>


            <Button variant="light" size="sm"> Favorite 	&#127775; </Button>

            <br />
            <small className="text-muted">Last updated 6 days ago</small>
          </Card.Footer>
          {/* <Button variant="light" size="sm"> See More </Button> */}
        </Card></Col>
      </Row>

      <br />
    </Container>

  );
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Home);