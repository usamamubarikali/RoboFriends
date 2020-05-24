import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll.js'

class App extends Component {
  
  constructor(props){
    super(props);
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

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  
  render(){
    const { robos, searchfield } = this.state;
    const filteredRobos = robos.filter(robo => {
      return robo.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if(!robos.length){
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );  
    }
    else{
      return (
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange = { this.onSearchChange } />
          <Scroll>
          <CardList robos = { filteredRobos }/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
