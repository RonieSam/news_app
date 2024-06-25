import React, { Component, useEffect, useState } from 'react'
import NewsItemComponent from './newsItemComponent'
import PropsTypes from "prop-types"
import Spinner from './spinner'
import InfinteScroll from "react-infinite-scroll-component"
import { v4 as uuidv4 } from 'uuid';

const NewsComponent=(props)=>{
  const [article,setArticle]=useState([])
  const [page,setPage]=useState(1)
  const [loading,setLoading]=useState(true)
  const [totalResults,setTotalResults]=useState(0)

  
  
  

  const handleFetchNews=async(page)=>{
    props.setProgress(0)
    setLoading(true)
    let url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=fd61faafbca345aaab290b8ced475e0e&page=${page}&pageSize=18&category=${props.category}`
    props.setProgress(25)

    let data = await fetch(url)
    props.setProgress(50)

    let parsedData = await data.json()
    props.setProgress(75)
    setArticle(parsedData.articles)
    setPage(page)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
   
    props.setProgress(100)

  }
  useEffect(()=>{
    handleFetchNews(page)
  },[])
  

  
  const fetchData=async()=>{
    setPage(page+1)
   
    let url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=fd61faafbca345aaab290b8ced475e0e&page=${page}&pageSize=18&category=${props.category}`
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(totalResults,article.length)
    setArticle(article.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
   
  }
    return (
      loading?<Spinner/>:
      <div className='my-5'>
          <InfinteScroll
          dataLength={article.length}
          next={fetchData}
          hasMore={totalResults>article.length}
          loader={<Spinner/>}
        >
            <div className='row mx-4'>
              {article.map((element) => {
            
                return element?<div className="col-md-4 my-3" key={uuidv4()} >
                  <NewsItemComponent title={element.title} description={element.description} author={element.author} imgURL={element.urlToImage} newsUrl={element.url}/>
                </div>:""
              })}
            </div>

            </InfinteScroll>

            
          </div>
    )
  
}
NewsComponent.defaultProps={
  category:"general"
}
NewsComponent.propsTypes={
  category:PropsTypes.string
}
export default NewsComponent