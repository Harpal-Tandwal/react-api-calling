import React, { useEffect, useState } from 'react'
import Card from './Card';
const News = ({query}) => {
  // console.log("news render...", "prop.query :", props?.query)



   const [posts,setPost]=useState([])
  
    useEffect(()=>{
       const getData =(query)=>{
         fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=9d0c8f53be974af983c5c91d290f7696`)
        .then((res)=>  res.json())
        .then((data)=>setPost(data.articles))
        .catch((err)=>console.log(err))
        console.log("searchg result for" , query)
       }  
      
      getData(query);
    },[query])
    
console.log(posts)
  return (
    
   <div className='card-container'>
   {posts?.map((post)=>{ return <Card {...post}/>})}
   </div>
  //  <h1>current  query setted : {query}</h1>

   
   
  )
}

export default News

