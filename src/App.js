import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Agent from './Agent.jsx';
//import firebase from './Firebase.js';
//require("firebase/database");
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

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
var database = firebase.database();

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
		<section className="wrapper">            
			{/*overview start*/}
			<div className="row">
			<div className="col-lg-12">
				<h3 className="page-header"><i className="fa fa-laptop" />Dashboard</h3>
				<ol className="breadcrumb">
				<li><i className="fa fa-home" /><a href="index.html">Home</a></li>
				<li><i className="fa fa-laptop" />Dashboard</li>						  	
				</ol>
			</div>
			</div>
			<div className="row">
			<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
				<div className="info-box blue-bg">
				<i className="fa fa-cloud-download"/>
				<div className="count">6.674</div>
				<div className="title">Download</div>						
				</div>{/*/.info-box*/}			
			</div>{/*/.col*/}
			<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
				<div className="info-box brown-bg">
				<i className="fa fa-shopping-cart" />
				<div className="count">7.538</div>
				<div className="title">Purchased</div>						
				</div>{/*/.info-box*/}			
			</div>{/*/.col*/}	
			<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
				<div className="info-box dark-bg">
				<i className="fa fa-thumbs-o-up"/>
				<div className="count">4.362</div>
				<div className="title">Order</div>		
				</div>{/*/.info-box*/}			
			</div>{/*/.col*/}
			<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
				<div className="info-box green-bg">
				<i className="fa fa-cubes" />
				<div className="count">1.426</div>
				<div className="title">Stock</div>						
				</div>{/*/.info-box*/}			
			</div>{/*/.col*/}
			</div>{/*/.row*/}

			{/* agent list */ }
			<div className="row">
			<div className="col-lg-9 col-md-12">
				<div className="panel panel-default">
				<div className="panel-heading">
					<h2><i className="fa fa-flag-o red" /><strong>Agents</strong></h2>
					<div className="panel-actions">
					<a href="index.html#" className="btn-setting"><i className="fa fa-rotate-right" /></a>
					<a href="index.html#" className="btn-minimize"><i className="fa fa-chevron-up" /></a>
					<a href="index.html#" className="btn-close"><i className="fa fa-times" /></a>
					</div>
				</div>
				<div className="panel-body">
					<table className="table bootstrap-datatable countries">
					<thead>
						<tr>
						<th />
						<th>First</th>
						<th>Last</th>
						<th>Online</th>
						<th>Performance</th>
						</tr>
					</thead>   
					<tbody>
						{ listAgents }
						<tr>
						<td><img src="img/India.png" style={{height: 18, marginTop: '-2px'}} /></td>
						<td>India</td>
						<td>3652</td>
						<td>2563</td>
						<td>
							<div className="progress thin">
							<div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} style={{width: '57%'}}>
							</div>
							<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={43} aria-valuemin={0} aria-valuemax={100} style={{width: '43%'}}>
							</div>
							</div>
							<span className="sr-only">57%</span>   	
						</td>
						</tr>
						<tr>
						<td><img src="img/Spain.png" style={{height: 18, marginTop: '-2px'}} /></td>
						<td>Spain</td>
						<td>562</td>
						<td>452</td>
						<td>
							<div className="progress thin">
							<div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={93} aria-valuemin={0} aria-valuemax={100} style={{width: '93%'}}>
							</div>
							<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={7} aria-valuemin={0} aria-valuemax={100} style={{width: '7%'}}>
							</div>
							</div>
							<span className="sr-only">93%</span>   	
						</td>
						</tr>
						
						
					</tbody>
					</table>
				</div>
				</div>	
			</div>{/*/col*/}
			
			
			</div>
		</section>
    );
  }
}

export default App;
