//firebase.js
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8Rf8yvF7bxk6J0NtnD_m9Xy6dm-m-fDM",
  authDomain: "roomyz.firebaseapp.com",
  databaseURL: "https://roomyz.firebaseio.com",
  projectId: "roomyz",
  storageBucket: "roomyz.appspot.com",
  messagingSenderId: "459316952223",
  appId: "1:459316952223:web:f9644f10e96bdb1c8436aa"
};



  class Firebase {
    constructor(){
      app.initializeApp(firebaseConfig);
      this.auth = app.auth();
      this.db = app.database();
      this.storage = app.storage();
    }

  getProfileInfo = (callback) => {
    if(!this.auth.currentUser)
    {
      setTimeout(() => this.getProfileInfo(callback), 100);
      return;
    }

    var listener = this.db.ref('users/' + this.auth.currentUser.uid );
    listener.on('value', snapshot => {
      callback(snapshot.val());
      
    })
  };



  updateProfileInfo= (profileInfo) => {
    this.db.ref('users/' + this.auth.currentUser.uid).update(profileInfo);
  };

  

  //Authorizing API

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
 
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

      // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next, fallback) =>
  this.auth.onAuthStateChanged(authUser => {
    if (authUser) {
      this.user(authUser.uid)
        .once('value')
        .then(snapshot => {
          const dbUser = snapshot.val();
          // default empty roles
          if (!dbUser.roles) {
            dbUser.roles = {};
          }
          // merge auth and db user
          authUser = {
            uid: authUser.uid,
            email: authUser.email,
            ...dbUser,
          };
          next(authUser);
        });
    } else {
      fallback();
    }
  });
  }
    export default Firebase;

