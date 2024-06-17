import React, { Component } from 'react'
import NewsItemComponent from './newsItemComponent'
import NewsDetailComponent from './newsDetailComponent'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom"
import Spinner from './spinner'

export default class newsComponent extends Component {
  constructor() {
    super()
    this.state = {
      article: [],
      page: 1,
      loading:false
    }
  }
  async componentDidMount() {
    this.setState({
      loading:true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c42f9f5e5ea34287b58a943371d94304&page=${this.state.page}&pageSize=18`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      article: parsedData.articles,
      totalPage: Math.ceil(parsedData.totalResults / 20),
      loading:false
    })
  }

  handleNextPage = async () => {
    this.setState({
      loading:true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c42f9f5e5ea34287b58a943371d94304&page=${this.state.page + 1}&pageSize=18`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      article: parsedData.articles,
      page: this.state.page + 1,
      loading:false
    })
  }
  handlePreviousPage = async () => {
    this.setState({
      loading:true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c42f9f5e5ea34287b58a943371d94304&page=${this.state.page - 1}&pageSize=18`
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(this.state.totalPage)
    this.setState({
      article: parsedData.articles,
      page: this.state.page - 1,
      loading:false
    })
  }
  newsDetail=()=>{
    console.log('this.state.article')

    const {title}=useParams()
    let article=this.state.article.find((element)=>{
      let repElement=element.title.replace("/","")
      console.log(title===repElement,title,repElement)
      return repElement===title})
    
      console.log(this.state.article,title)
    
      return <NewsDetailComponent article={article} />
  }
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={this.state.loading?<Spinner/>:<div className='mx-5 my-5'>
            <div className='row mx-4'>
              {this.state.article.map((element) => {
                return <div className="col-md-4 my-3" key={element.title.replace(" ", "-")} >
                  <NewsItemComponent title={element.title} description={element.description} author={element.author} imgURL={element.urlToImage} newsUrl={element.url}/>
                </div>
              })}
            </div>
            <div className="d-flex justify-content-between">
              <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handlePreviousPage}>Previous</button>
              <button disabled={this.state.page === this.state.totalPage} type="button" className="btn btn-dark" onClick={this.handleNextPage}>Next</button>
            </div>  
          </div>}/>

          <Route path='/:title' element={<this.newsDetail />}/>
          
        </Routes>
      </Router>
    )
  }
}
