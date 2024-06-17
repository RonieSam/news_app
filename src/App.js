import './App.css';
import NavBar from './components/navbar';
import NewsComponent from './components/newsComponent';
import React, { Component } from 'react'
export default class App extends Component {


  render() {
    return (
    
      <div className="App">
        <NavBar />
        <NewsComponent/>
        
        
      </div>
    
    )
  }
}


