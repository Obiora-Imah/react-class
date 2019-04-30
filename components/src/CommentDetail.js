import React from 'react'

export const CommentDetail = (props) => {
  console.log(props)
  return (
    <div className="comment">
      <a className="avatar">
        <img alt="avatar" src={props.avatar}/>
      </a>
      <div className="content">
        <a className="author">
         { props.author || 'Sam' }
        </a>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="text">
          {props.comment}
        </div>
      </div> 
    </div>
  )
}