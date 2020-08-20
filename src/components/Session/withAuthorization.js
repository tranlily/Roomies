import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import AuthUserContext from './context'; //newly put 4/25
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      // this.listener = this.props.firebase.auth.onAuthStateChanged(
      //   authUser => {
      //       if (authUser) {
      //         this.props.firebase
      //           .user(authUser.uid)
      //           .once('value')
      //           .then(snapshot => {
      //             const dbUser = snapshot.val();
      //             // default empty roles
      //             if (!dbUser.roles) {
      //               dbUser.roles = {};
      //             }
      //             // merge auth and db user
      //             authUser = {
      //               uid: authUser.uid,
      //               email: authUser.email,
      //               ...dbUser,
      //             };
      //             this.setState({ authUser });
      //           });
      //       } else {
      //         this.setState({ authUser: null });
      //       }
      //   },
      // );
    }
    componentWillUnmount() {
      //this.listener();
      const condition = authUser => !!authUser
       // authUser && !! authUser.roles[ROLES.ADMIN];
    }
    //above 2 lines go a step further and check for a user's role or 
    //permission
    render() {
      return ( //need parentheses?
      <Component {...this.props} />
      );
    }
  }
  return compose(
    withRouter,
    withFirebase,
  )(WithAuthorization);
};
export default withAuthorization;