import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { withAuthorization } from '../Session';

class Favorites extends React.Component {
    constructor(props) {
        super(props);
    };


    render = () => (
        <Container>
            <Alert variant="warning">
                These are your favorite Roomies!
        </Alert>
        <Row>
            <br />
            <Col sm> <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.ibb.co/x5Z6f4b/DemoImg.png" />
                <Card.Body>
                    <Card.Title>Rodney Hamster</Card.Title>
                    <Card.Text>
                        I am a hamster looking for a Roomie.
                        <br />
                        California State University, Fullerton
                        <br />
                        Class of 2021 
    </Card.Text>
                </Card.Body>
                {/* <Button variant="light" size="sm"> See More </Button> */}
            </Card>
            </Col>

            <Col sm> <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://vignette.wikia.nocookie.net/animalcrossing/images/0/04/Sherb_Poster_NH.png/revision/latest?cb=20200319185254" height="70%"/>
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
                {/* <Button variant="light" size="sm"> See More </Button> */}
            </Card>
            </Col>
            
            <Col sm> <Card style={{ width: '18rem' }}>
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
                {/* <Button variant="light" size="sm"> See More </Button> */}
            </Card>
            </Col>
            
            </Row>
        </Container>

    );
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Favorites);