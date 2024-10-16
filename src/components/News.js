import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {  
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  constructor(props) {
    super(props)
    console.log("Hello i am a constructor from News component")
    this.state = {
         articles: [],
         loading: false,
         page: 1,
         totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
  }

  async updateNews() {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url)
    this.props.setProgress(30)
    let parseData = await data.json()
    this.props.setProgress(70)
    this.setState({articles: parseData.articles, 
                   totalResults: parseData.totalResults,
                   loading: false
    })
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews()
  }

  // handlePrevClick= async()=> {
  //   this.setState({page: this.state.page - 1})
  //   this.updateNews()
  // }

  // handleNextClick= async()=> {
  //   this.setState({page: this.state.page + 1})
  //   this.updateNews()
  // }

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({page: this.state.page + 1})
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({articles: this.state.articles.concat(parseData.articles), 
                   totalResults: parseData.totalResults,
    })
  };

  render() {
    return (
      <>
        <h2 className='text-center' style={{marginTop: '80px', marginBottom: '25px'}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headline</h2>
        {this.state.loading && <Spiner/>} 
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spiner/>}
        >
        <div className="container">
        <div className='row'>
          {this.state.articles.map((element) => {
          return <div className='col-md-4' key= {element.url}>
          <NewsItem title= {element.title ? element.title.slice(0, 45): ""} description={element.description ? element.description.slice(0, 88): ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
      })}
        </div>
        </div>
        </InfiniteScroll>
      
      </>
    )
  }
}
