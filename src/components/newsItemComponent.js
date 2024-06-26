import React from 'react'
const newsItemComponent =(props)=> {
let{title,description,author,imgURL,newsUrl}=props
    return (
     
        <div className="card">
           {imgURL?<img src={imgURL } className="card-img-top" alt="..."></img>:""}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{author}</h6>
            <p className="card-text">{description}</p>
           
           {newsUrl?<a href={newsUrl} target='_blank' rel="noreferrer"><button className="btn btn-success mx-1">Source</button></a>:""}
          </div>
        </div>
      
    )
  
}
export default newsItemComponent