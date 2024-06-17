import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class newDetailComponent extends Component {
  render() {
    const {article}=this.props

    return (
      <div>
        <div className="container">
          <h1>{article.title?article.title:"nothing found"}</h1>
          <h3 className='text-end'>{article.author?`-${article.author}`:""}</h3>
          <h5 className='text-start'>{article.description?`-${article.description}`:""}</h5>
          <Link to="/"><button className="btn btn-primary" >back</button></Link>
          
        </div>
      </div>
    )
  }
}
