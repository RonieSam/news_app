import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import NewsComponent from './components/newsComponent';
import React, { Component } from 'react'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      category:"general"
     
    }
  }

handleCategory=(category)=>{
  this.setState({
    category:category
  })
}
  
  render() {
    return (
    
      <div className="App">
        <Router>
        <NavBar handleCategory={this.handleCategory}/>
        <Routes>
          <Route path='/' element={<NewsComponent category='general'/>}/>
          <Route path='/business' element={<NewsComponent category='business'/>}/>
          <Route path='/health' element={<NewsComponent category='health'/>}/>
          <Route path='/science' element={<NewsComponent category='science'/>}/>
          <Route path='/technology' element={<NewsComponent category='technology'/>}/>
          <Route path='/sports' element={<NewsComponent category='sports'/>}/>
          <Route path='/entertainment' element={<NewsComponent category='entertainment'/>}/>

      
        </Routes>
        </Router>
        
        
      </div>
    
    )
  }
}


