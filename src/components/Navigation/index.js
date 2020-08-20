import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);
const NavigationAuth = () => (

  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="http://tpidv.com/tpidv.com/magento/atlassian-jira/WEB-INF/classes/avatars/cloud.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Roomies
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">

      <Nav.Link as="li">
        <Link to={ROUTES.LANDING}>Landing</Link>
      </Nav.Link>

      <Nav.Link as="li">
        <Link to={ROUTES.HOME}>Home</Link>
      </Nav.Link>

      <Nav.Link as="li">
        <Link to={ROUTES.FAVORITES}>Favorites</Link>
      </Nav.Link>

      <Nav.Link as="li">
        <Link to={ROUTES.FILTERS}>Filters</Link>
      </Nav.Link>


      <Nav.Link as="li">
        <Link to={ROUTES.PROFILE}>Profile</Link>
      </Nav.Link>

      <Nav.Link as="li">
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </Nav.Link>

      <Nav.Link as="li">
        <SignOutButton />
      </Nav.Link>

    </Navbar.Collapse>
  </Navbar>
);

const NavigationNonAuth = () => (

  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="http://tpidv.com/tpidv.com/magento/atlassian-jira/WEB-INF/classes/avatars/cloud.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Roomies
    </Navbar.Brand>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav.Link as="li">
        <Link to={ROUTES.LANDING}>Landing</Link>
      </Nav.Link>

      <Nav.Link as="li">
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </Nav.Link>
    </Navbar.Collapse>

  </Navbar>

);
export default Navigation;