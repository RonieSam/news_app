import React, { Component } from 'react'
import NewsItemComponent from './newsItemComponent'
import PropsTypes from "prop-types"
import Spinner from './spinner'
import InfinteScroll from "react-infinite-scroll-component"
import { v4 as uuidv4 } from 'uuid';

export default class newsComponent extends Component {
  constructor() {
    super()
    this.state = {
      article: [],
      page: 1,
      loading:false,
      totalResults:0
     
    }
  }
  
  static defaultProps={
    category:"general"
  }
  static propsTypes={
    category:PropsTypes.string
  }

  handleFetchNews=async(page)=>{
    this.props.setProgress(0)
    this.setState({
      loading:true,
    })
    let url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=c42f9f5e5ea34287b58a943371d94304&page=${page}&pageSize=18&category=${this.props.category}`
    this.props.setProgress(25)

    let data = await fetch(url)
    this.props.setProgress(50)

    let parsedData = await data.json()
    this.props.setProgress(75)

    this.setState({
      article: parsedData.articles,
      page:page,
      loading:false,
      totalResults:parsedData.totalResults
    })
    this.props.setProgress(100)

  }
  async componentDidMount() {
   this.handleFetchNews(this.state.page)
  }

  
  fetchData=async()=>{
    
    this.setState({
      page:this.state.page+1
    })
    let url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=fd61faafbca345aaab290b8ced475e0e&page=${this.state.page}&pageSize=18&category=${this.props.category}`
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(this.state.totalResults,this.state.article.length)
    this.setState({
      article: this.state.article.concat(parsedData.articles),
      totalResults:parsedData.totalResults
    })
  }
  render() {
    return (
      this.state.loading?<Spinner/>:
      <div className='my-5'>
          <InfinteScroll
          dataLength={this.state.article.length}
          next={this.fetchData}
          hasMore={this.state.totalResults>this.state.article.length}
          loader={<Spinner/>}
        >
            <div className='row mx-4'>
              {this.state.article.map((element) => {
            
                return element?<div className="col-md-4 my-3" key={uuidv4()} >
                  <NewsItemComponent title={element.title} description={element.description} author={element.author} imgURL={element.urlToImage} newsUrl={element.url}/>
                </div>:""
              })}
            </div>

            </InfinteScroll>

            
          </div>
    )
  }
}
