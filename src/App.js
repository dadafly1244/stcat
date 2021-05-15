import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, Community,Statistics, Map, User } from './pages';
import './App.css';
import Header from './components/Header'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'



class App extends Component {
  render() {
    return (
      <div className="App">
          
        <Router>
          <div>
            <Link to="/Home"> <Header /></Link>
            <AmplifySignOut />
          </div>
          
          <div>
            <nav>
              <div id="grid">
                <div id="row1">
                  <Link to="/Home"><button class="myButton">Home</button></Link>
                </div>
                <div id="row2">
                  <Link to="/Map"><button class="myButton">Map</button></Link>
                  <Link to="/Community"><button class="myButton">Community</button></Link>
                </div>
                <div id="row3">
                  <Link to="/Statistics"><button class="myButton">Statistics</button></Link>
                  <Link to="/user"><button class="myButton">User</button></Link>
                </div>
              </div>
            </nav>

            <Route exact path='/Home' component={Home}/>
            <Route path="/Community" component={Community}/>
            <Route path="/Statistics" component={Statistics}/>
            <Route path="/Map" component={Map}/>
            <Route path='/user/:name' component={User}/>
          </div>
        </Router>
      </div>
     
      
    );
  }
}
export default withAuthenticator(App);
//export default App;