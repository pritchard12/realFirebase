import React from 'react';
import { Switch, Route } from 'react-router-dom'
import App from './App';
import AgentView from './AgentView.jsx';
import Template from './Template.jsx';
import Layout from './Layout.jsx';
import Tables from './Table.jsx';

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

// const Routes = (props) => (
//   <main>
//     <Router>
//       <Route component={Layout}>
//         <Route exact path='/' component={ App }/>
//         <Route exact path='/template' component={ Template }/>
//         <Route path='/agents/:number' component={ AgentView }/>
//       </Route>
//     </Router>
//   </main>
// );

// const Routes = () => (
//   <main>
//     <Switch>
//       <Route exact path='/' component={ App }/>
//       <Route exact path='/template' component={ Template }/>
//       <Route path='/agents/:number' component={ AgentView }/>
//     </Switch>
//   </main>
// );

const Routes = () => (
    <Layout>
        <Route exact path="/" component={ App }/>
        <Route path="/template" component={ Template }/>
        <Route path='/agent/:number' component={ AgentView }/>
		<Route path="/tables/mine" component={ Tables }/>
    </Layout>
);
// <Route path='/roster' component={Roster}/>
export default Routes;

    
//<Router {...props}>
// const Routes = (props) => (
//   <Router {...props}>
//     <Route component={Layout}>
//         <Route path="/" component={App} />
//         <Route path="/template" component={Template} />
//         <Route path="/agents/*" component={AgentView} />
//     </Route>
    
//   </Router>
// );

// export default Routes;