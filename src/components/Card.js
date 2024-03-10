import React from 'react'
const Card = (props) => {

  return (
    <div className='news-card'>

        <img src={props?.urlToImage}></img>
        <h1 className='author'>author: {props?.author}</h1>
        <h2 className='title'>{props?.title}</h2>
        <p className='description'>{props?.description}</p>
        <a href={props?.url } className='read-more'> read more</a>

    </div>
  )
}

export default Card