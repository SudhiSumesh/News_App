import React from 'react'
import '../styles/NewsCard.css'
export default function NewsCard({news}) {
  let date=news.publishedAt
  return (
    <div className='newscard'>
      <div className="card">
          <div className="img-sec">
            <img src={news.urlToImage} alt="news" />
          </div>
          <div className="news-sec">
             <a target='__blank' href={news.url} className="title">
              {news.title}
             </a>
             <div className="source">
                 {news.source.name}
             </div>
             <div className="time">
             {date.substr(0,10)}
             </div>
          </div>
      </div>
   </div>
  )
}
