import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props
    return (
      <div className='my-2'>
        <div className="card"> 
          <div style={{display: 'flex',
                       justifyContent: 'center',
                       position: 'absolute',
                       right: '0' 
          }}>
          <span className="badge rounded-pill bg-danger" style={{left: "88%", zIndex: "1" }}>{source}</span>
          </div>
  <img src={imageUrl ? imageUrl : "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/07/0/0/Student-loan-debt-protest-signs.jpg?ve=1&tl=1"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target= "_blank" className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}
