import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.components';
import Footer from './components/Footer.components';
import Cal from './components/calculator';


class App extends Component {
	constructor(){
		super();
		this.age =20;
		this.name="mola"
		this.state = {name :"lolo",age : 30};
	}
	
	getval(){
		   return "aaaaa";
	   }
	onClick(){
		this.setState({name : "BoB"});
	}
	setAge(e){
		const age =e.target.value;
		this.setState({age : age});
	}
  render() {
	   const myname="mike"; 
	   const list =[<Header />,<Header />,<Header />]; 
	
    return (
	
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
		<Header title="yyyyyyyy" name={this.state.name}/>
		<Cal />
		
		
		{ /* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		*/}
		<p>{myname}</p>
		<div>3+2 ={3+2}</div>
		<div>call function{(() =>{return 1234})()}</div>
		<div>{this.getval()}</div>
		<div>Age: {this.age}</div>
		<div>{this.state.name}</div>
		<div>{this.state.age}</div>
		<button onClick={this.onClick.bind(this)}>Click Me Please</button>
		<input onChange={this.setAge.bind(this)} />
		<Footer />
      </div>
    );
  }
}

export default App;
