import React, { Component } from 'react'
import NewsItems from './NewsItems'


export class News extends Component {

  constructor(){
    super();
    console.log("i am a conatructor")
    this.state = {
           articles: [],
           loading: false
    }
  }

   async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e7588cc1a5584dc2bd29ccecd8a1105d"
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,totalResult: parsedData.totalResult})
   }

    handlePrevClick= async ()=>{
      console.log("previous");
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e7588cc1a5584dc2bd29ccecd8a1105d&page=${this.state.page - 1}&pageSize=20`;
       let data = await fetch(url);
       let parsedData = await data.json()
       this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
  
    })
  }
        

  handleNextClick = async()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResult/20)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e7588cc1a5584dc2bd29ccecd8a1105d&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
    
    }
  }

 
    
  
  render() {
    return (
      
         <div className='container my-3'>
        <h1>NewsMonkey - TOP HEADLINES</h1>

        <div className="row">
        {this.state.articles.map((element)=>{
       
       return <div className='col-md-4' key={element.url}>
          <NewsItems title={element.title} description={element.title}  imageUrl={element.urlToImage} NewsUrl={element.url}/>
          </div>
      })}

        </div>

        <div className='container d-flex justify-content-between'>
<button  className="btn btn-dark" disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick}>&larr; Previous</button>
<button className="btn btn-dark" type="button" onClick={this.handleNextClick} >Next &rarr;</button>
</div>
         </div>
    )
  }
}

export default News
