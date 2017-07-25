import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import firebase from './Firebase.js';
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

// //firebase.initializeApp(config);
// var database = firebase.database();
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

class Agent extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(props) {
        // console.log('from agent', this.props);
        // let uri = this.getPath(),
        //     agents = firebase.database().ref(uri);

        // console.log('agents: ', agents);
        
        // agents.on('value', data => {
        //     console.log(data.val());
        // })
    }

    // <Link onClick={this.scrollUp} to={uri}> {venue.name} </Link>
    render() {
        return (
            <tr>
				<td><img src="/img/UnitedStates.png" style={{height: 18, marginTop: '-2px'}} /></td>
				<td>{ this.props.first }</td>
				<td>{ this.props.last }</td>
				<td>1025</td>
				<td>
					<div className="progress thin">
					<div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={73} aria-valuemin={0} aria-valuemax={100} style={{width: '73%'}}>
					</div>
					<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={27} aria-valuemin={0} aria-valuemax={100} style={{width: '27%'}}>
					</div>
					</div>
					<span className="sr-only">73%</span>   	
				</td>
				{/* <Link to={`/agents/${ this.props.id }`}>{ this.props.first } { this.props.last }</Link>  */ }
			</tr>
        );
    }
}

export default Agent;
