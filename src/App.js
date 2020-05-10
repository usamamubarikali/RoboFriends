import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      robos : [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({robos:users}))
  }
  
  render(){
    console.log(this.state.robos)
    if(this.state.robos.length === 0){
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );  
    }
    else{
      return (
        <div className="App">
          <h1>RoboFriends</h1>
          <SearchBox />
          <CardList robos = { this.state.robos }/>
        </div>
      );
  
    }
  }
}

export default App;
