'use strict';
var firebase = require("firebase/app");
require("firebase/database");

module.exports = function () {
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

	return firebase;
};
