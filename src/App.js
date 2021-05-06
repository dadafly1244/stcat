import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, Community,Statistics, Map, User } from './pages';
import './App.css';
import Header from './components/Header'


class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
        </div>
       <Router>
        <div>
          <nav>
            <div id="grid">
              <div id="row1">
                <button class="myButton">
                  <Link to="/">Home</Link>
                </button>
              </div>
              <div id="row2">
                <button class="myButton">  
                  <Link to="/Map">Map</Link>
                </button>        
                <button class="myButton">
                  <Link to="/Community">Community</Link>
                </button>
              </div>
              <div id="row3">
                <button class="myButton">
                  <Link to="/Statistics">Statistics</Link>
                </button>
                <button class="myButton">
                  <Link to="/user">User</Link>
                </button>
              </div>
            </div>
          </nav>

          <Route exact path='/' component={Home}/>
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

export default App;