import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Agent from './Agent.jsx';
import Deals from './Deals.jsx';
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

class AgentView extends Component {

	constructor(){
		super();
		this.state = {
			deals: {}
		};
	}

	getAgentID() {
		let uri = this.props.location.pathname
		return parseInt(uri.replace('/agent/', ''));
	}

	setDeals (data) {
		this.setState({
			deals: data
		});
	}

	componentDidMount(props) {
    //console.log('path:', this.getPath());

    // var playersRef = firebase.database().ref("teams");
    // playersRef.push ({
    //   name: "Knicks",
    //   city: 'New York',
    //   age: 30
    // });
    // playersRef.push ({
    //   name: "Lakers",
    //   city: 'Los Angeles',
    //   age: 30
    // });
    // ref.child('users').orderByChild('name').equalTo('name').on("value", function(snapshot) 
    //let agent = firebase.database().ref('/agents/');
    
    //works
    // let deals = firebase.database().ref('/teams/');//.orderByChild('agentID').equalTo('1');
    //     deals.orderByChild("city").equalTo('New York').on("value", function(data) {
    //   console.log(data.val());
    // });
		let agentID = this.getAgentID();
		console.log('agentID:', agentID);
		let deals = firebase.database().ref('/deals/');//.orderByChild('agentID').equalTo('1');
		deals.orderByChild("agentID").equalTo(agentID).on("value", data => {
		//console.log(data.val());
		this.setState({
			deals: data.val()
		});
		});
    // var ref = firebase.database().ref("teams");
    // ref.orderByChild("city").equalTo('New York').on("child_added", function(snapshot) {
    //   console.log(snapshot.val());
    // });

    //console.log('agents: ', agents);
    //console.log('keys:', agents.orderByKey);
    //let user = agent.child('adamSchwarz');
    // deals.on('value', data => {
    //   //console.log(data.val());
    //   // console.log('key', data);
    //   this.setState({
    //     agent: data.val()
    //   })
    // });
    // firebase.database().ref('/agents').once('value').then(function(snapshot) {
    //     //console.log(snapshot.val());
    //     this.setState({
    //       agents: snapshot.val()
    //     })
    // });
  }

	render() {
		console.log(this.state.deals);
		let deals, keys;
		if (this.state.deals) {
			keys = Object.keys(this.state.deals);
			deals = keys.map(key => {
				//return <Deals { ...this.state.deals[key] } />
				return (
						<tr>
							<td rowSpan={3}>2</td>
							<td>{ this.state.deals[key].address }, { this.state.deals[key].city }</td>
						</tr>
						<tr>
							<td>Close Date: { this.state.deals[key].close }</td>
							<td>@fat</td>
						</tr>
				);
			})
		}
		return (
			<section className="wrapper">
				<div className="row">
				<div className="col-lg-12">
					<h3 className="page-header"><i className="fa fa-table" /> Table</h3>
					<ol className="breadcrumb">
					<li><i className="fa fa-home" /><a href="index.html">Home</a></li>
					<li><i className="fa fa-table" />Table</li>
					<li><i className="fa fa-th-list" />Basic Table</li>
					</ol>
				</div>
				</div>
				<div className="row">
				<div className="col-sm-6">
					<section className="panel">
					<header className="panel-heading no-border">
						Border Table
					</header>
					<table className="table table-bordered">
						<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td rowSpan={2}>1</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>Mark</td>
							<td>Otto</td>
							<td>@TwBootstrap</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>3</td>
							<td colSpan={2}>Larry the Bird</td>
							<td>@twitter</td>
						</tr>
						{ deals }
						</tbody>
					</table>
					</section>
				</div>
				<div className="col-sm-6">
					<section className="panel">
					<header className="panel-heading">
						Hover Table
					</header>
					<table className="table table-hover">
						<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>1</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>3</td>
							<td colSpan={2}>Larry the Bird</td>
							<td>@twitter</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Sumon</td>
							<td>Mosa</td>
							<td>@twitter</td>
						</tr>
						</tbody>
					</table>
					</section>
				</div>
				</div>
			</section>
		);
	}
};

{/* <h2>Deals:</h2>
{ deals } */}
export default AgentView;
