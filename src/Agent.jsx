import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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


class Agent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            agent: null
        }
        this.firebase = this.props.firebase;
    }

    getPath() {
        let uri = this.props.location.pathname
        //uri = uri.replace('/admin/venues/', '')
        return uri
    }
    componentDidMount(props) {
        console.log('from agent', this.props);
        let uri = this.getPath(),
            agents = this.firebase.database().ref(uri);

        console.log('agents: ', agents);
        
        agents.on('value', data => {
            console.log(data.val());
        })
    }

    // <Link onClick={this.scrollUp} to={uri}> {venue.name} </Link>
    render() {

        return (
            <div className="App">
                <h1>Agent</h1>
            </div>
        );
    }
}

export default Agent;
