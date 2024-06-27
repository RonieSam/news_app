import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import NewsComponent from './components/newsComponent';
import React, { Component, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

const App =()=> {

  const[progress,setProgressState]=useState(0)
 
    
 const setProgress = (pro) => {
    setProgressState(pro)
  }

  
    return (
      <Router>

        <div className="App">
          <LoadingBar
            color='#f11946'
            height='2px'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <NavBar />
          <div className="my-5 fs-2 fw-bolder">News Monkey</div>
          <Routes>
            <Route exact path='/' element={<NewsComponent key="general" setProgress={setProgress} category='general' />} />
            <Route exact path='/business' element={<NewsComponent key="business" setProgress={setProgress} category='business' />} />
            <Route exact path='/health' element={<NewsComponent key="health" setProgress={setProgress} category='health' />} />
            <Route exact path='/science' element={<NewsComponent key="science" setProgress={setProgress} category='science' />} />
            <Route exact path='/technology' element={<NewsComponent key="technology" setProgress={setProgress} category='technology' />} />
            <Route exact path='/sports' element={<NewsComponent key="sports" setProgress={setProgress} category='sports' />} />
            <Route exact path='/entertainment' element={<NewsComponent key="entertainment" setProgress={setProgress} category='entertainment' />} />


          </Routes>


        </div>
      </Router>

    )
  
}


export default App