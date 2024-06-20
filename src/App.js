import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import NewsComponent from './components/newsComponent';
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      progress:0
     
    }
  }
  setProgress=(pro)=>{
    console.log(pro)
    this.setState({
      progress:pro
    })
  }

  render() {
    return (

      <div className="App">
        <Router>
          <LoadingBar
            color='#f11946'
            height='2px'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <NavBar />
          <Routes>
            <Route path='/' element={<NewsComponent setProgress={this.setProgress} category='general' />} />
            <Route path='/business' element={<NewsComponent setProgress={this.setProgress} category='business' />} />
            <Route path='/health' element={<NewsComponent setProgress={this.setProgress} category='health' />} />
            <Route path='/science' element={<NewsComponent setProgress={this.setProgress} category='science' />} />
            <Route path='/technology' element={<NewsComponent setProgress={this.setProgress} category='technology' />} />
            <Route path='/sports' element={<NewsComponent setProgress={this.setProgress} category='sports' />} />
            <Route path='/entertainment' element={<NewsComponent setProgress={this.setProgress} category='entertainment' />} />


          </Routes>
        </Router>


      </div>

    )
  }
}


