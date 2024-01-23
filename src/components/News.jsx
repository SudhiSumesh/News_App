
import NewsCard from './NewsCard'
import '../styles/News.css'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
export default function News() {
    const [news,setNews]=useState([])
    const data=axios.create({
        baseURL:'https://newsapi.org/v2/everything?q=tesla&from=2024-01-24&sortBy=publishedAt&apiKey=a00ecd79ecfd4dde9728413787280fe9'
    })

    const fetchData= async ()=>{
     await   data.get().then((response)=>{
         setNews(response.data.articles)
         
         console.log(response.data.articles);
         })
    }
    useEffect(()=>{
     fetchData()
},[])
  return (
    <div className='news'>
        <h1 >Latest News</h1>
       <div className='news-wrapper'>
        {
          news.length>0? news.map((n,index)=>(
            <NewsCard key={index} news={n} />
           )):<div  className='spinner ' ><FontAwesomeIcon icon={faCircleNotch} spinPulse size='2xl'/><div className='loading'>loading</div></div>
        }
    
       </div>
   </div>
  )
}
