import React, { Component } from 'react'
export default class newsItemComponent extends Component {
  
  render() {
    let{title,description,author}=this.props
    return (
     
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{author}</h6>
            <p className="card-text">{description}</p>
            <button className="btn btn-primary">View More</button>
          </div>
        </div>
      
    )
  }
}
