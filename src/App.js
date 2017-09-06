import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Home, BasicRouting} from './components'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';



class App extends Component {
	
  render() {
	   
	
    return (
	<BrowserRouter>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <ul>
              <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/BasicRouting" activeClassName="active">Basic Routing</NavLink></li>
         </ul>
        </div>
		<div>
		 
		 <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/BasicRouting" component={BasicRouting} />
                 
                
            </Switch>
		</div>
      </div>
	  </BrowserRouter>
    );
  }
}

export default App;
