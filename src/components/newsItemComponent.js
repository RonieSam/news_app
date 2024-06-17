import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class newsItemComponent extends Component {
  
  render() {
    let{title,description,author,imgURL,newsUrl}=this.props
    return (
     
        <div className="card" style={{ width: "18rem" }}>
           {imgURL?<img src={imgURL } className="card-img-top" alt="..."></img>:""}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{author}</h6>
            <p className="card-text">{description}</p>
           <Link to={`/${title.replace("/","")}`}> <button className="btn btn-primary mx-1"  >View More</button></Link>
           {newsUrl?<a href={newsUrl} target='_blank' rel="noreferrer"><button className="btn btn-success mx-1">Source</button></a>:""}
          </div>
        </div>
      
    )
  }
}
