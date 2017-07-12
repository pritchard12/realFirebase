import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Agent from './Agent.jsx';
import firebase from './Firebase.js';
require("firebase/database");

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      agents: null
    }
    
    //this.firebase = this.props.firebase;
    // this.database = firebase.database();
  }

  componentDidMount(props) {
    let agents = firebase.database().ref('/agents/');
    console.log('agents: ', agents);
    //console.log('keys:', agents.orderByKey);
    ///let user = agents.child('adamSchwarz');
    agents.on('value', data => {
      console.log(data.val());
      // console.log('key', data);
      this.setState({
        agents: data.val()
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

    var agents = this.state.agents;
    console.log('render agents:', agents);
    var listItems, listAgents;
    if (agents) {
      listItems = Object.keys(agents, data => { });
    }
    if (agents) {
      listAgents = listItems.map(agent => {
        return <Agent { ...agents[agent] }/>
      })
    }
    console.log('listItems:', listItems);

    // var list = listItems.map(agent => {
    //   return <p>{ agents[agent].first }</p>
    // })
    // console.log(list);

    // var list = listItems.map(listItems, agent => {
    //   <span>{agents.agent.first }</span>
    // });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <p>
            Agents:
            { listAgents }
            
          </p>
        </p>
      </div>
    );
  }
}

export default App;
