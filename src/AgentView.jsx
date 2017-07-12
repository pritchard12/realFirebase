import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Agent from './Agent.jsx';

var firebase = require("firebase/app");
require("firebase/database");


var config = {
    apiKey: "AIzaSyCmFHTR5pKa60qhrAU3km07Ki5gwJIpdTQ",
    authDomain: "real-estate-9d5a8.firebaseapp.com",
    databaseURL: "https://real-estate-9d5a8.firebaseio.com",
    projectId: "real-estate-9d5a8",
    storageBucket: "real-estate-9d5a8.appspot.com",
    messagingSenderId: "975717440130"
};
firebase.initializeApp(config);

var database = firebase.database();

class Agent extends Component {

  constructor(){
    super();
    this.state = {
      agent: null
    }
  }

  getPath() {
    let uri = this.props.location.pathname
    uri = uri.replace('/admin/venues/', '')
    return uri
  }

  componentDidMount(props) {
    console.log('path:', this.getPath());

    let agent = firebase.database().ref('/agents/');
    console.log('agents: ', agents);
    //console.log('keys:', agents.orderByKey);
    ///let user = agents.child('adamSchwarz');
    agent.on('value', data => {
      console.log(data.val());
      // console.log('key', data);
      this.setState({
        agent: data.val()
      })
    });
    // firebase.database().ref('/agents').once('value').then(function(snapshot) {
    //     //console.log(snapshot.val());
    //     this.setState({
    //       agents: snapshot.val()
    //     })
    // });
  }

  render() {

    return (
      <div className="App">
        <h2>Agent </h2>
      </div>
    );
  }
}

export default Agent;
