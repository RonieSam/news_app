import React, { Component } from 'react'
import NewsItemComponent from './newsItemComponent'
export default class newsComponent extends Component {
  constructor() {
    super()
    this.state = {
      article: [],
      page:1,
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c42f9f5e5ea34287b58a943371d94304&page=${this.state.page}&pageSize=20`
    let data=await fetch(url)
    let parsedData=await data.json()
  this.setState({
    article:parsedData.articles,
    totalPage:Math.ceil(parsedData.totalResults/20)
  })}

  handleNextPage=async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c42f9f5e5ea34287b58a943371d94304&page=${this.state.page+1}&pageSize=20`
    let data=await fetch(url)
    let parsedData=await data.json()
    this.setState({
    article:parsedData.articles,
    page:this.state.page+1
    })
  }
  handlePreviousPage=async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c42f9f5e5ea34287b58a943371d94304&page=${this.state.page-1}&pageSize=20`
    let data=await fetch(url)
    let parsedData=await data.json()
    console.log(this.state.totalPage)
    this.setState({
    article:parsedData.articles,
    page:this.state.page-1
    })
  }
  render() {
    return (
      <div className='mx-5 my-5'>
      <div className='row mx-4'>
        {this.state.article.map((element) => {
          return <div className="col-md-3 my-3" key={element.title.replace(" ","-")} >
            <NewsItemComponent  title={element.title} description={element.description} author={element.author} />
          </div>
        })}
      </div>
      <div className="d-flex justify-content-between">
      <button disabled={this.state.page===1} type="button" className="btn btn-dark" onClick={this.handlePreviousPage}>Previous</button>
      <button disabled={this.state.page===this.state.totalPage} type="button" className="btn btn-dark" onClick={this.handleNextPage}>Next</button>
      </div>
      </div>
      
    )
  }
}
