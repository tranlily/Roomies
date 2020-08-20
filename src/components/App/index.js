import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Favorites from '../Favorites';
import Filters from '../Filters';
import Profile from '../Profile';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as ROUTES from '../../constants/routes';
import {withFirebase} from '../Firebase';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount(){
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
        ? this.setState({authUser})
        : this.setState({authUser: null});
      },
    );
  }

  componentWillUnmount(){
    this.listener();
  }

  render() {
    return (
      <>
      <Router>
        <div>
          <Navigation authUser = {this.state.authUser} />
        
        <hr/>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.FAVORITES} component={Favorites}/>
      <Route path={ROUTES.FILTERS} component={Filters}/>
      <Route path={ROUTES.PROFILE} component={Profile}/>

        </div>
      </Router>
      <ToastContainer />
      </>
    )
  }

}

export default withFirebase(App);