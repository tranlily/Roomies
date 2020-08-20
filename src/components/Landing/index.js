import React from 'react';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

const temp = () => (
  <Container>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height="550" width="800"
      src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Find comfortable places to live</h3>
      <p>Roomies shows places that are available around you</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height="550" width="800"
      src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Connect with students</h3>
      <p>Roomies is a student specific platform</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height="550" width="800"
      src="https://images.unsplash.com/photo-1541194577687-8c63bf9e7ee3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Organize your roommate search</h3>
      <p>Roomies allows you to favorite listings to tailor your feed</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>

);

//use a background URL is a style rule and must be in css file
export default temp;