import React from 'react';
import { Switch, Route } from 'react-router-dom'
import App from './App';
import Agent from './Agent.jsx';

// var firebase = require("firebase/app");
// require("firebase/database");


// var config = {
//     apiKey: "AIzaSyCmFHTR5pKa60qhrAU3km07Ki5gwJIpdTQ",
//     authDomain: "real-estate-9d5a8.firebaseapp.com",
//     databaseURL: "https://real-estate-9d5a8.firebaseio.com",
//     projectId: "real-estate-9d5a8",
//     storageBucket: "real-estate-9d5a8.appspot.com",
//     messagingSenderId: "975717440130"
// };
// firebase.initializeApp(config);

// var database = firebase.database();

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ App }/>
      <Route path='/agents/:number' component={ Agent }/>
    </Switch>
  </main>
);
// <Route path='/roster' component={Roster}/>
export default Main;
