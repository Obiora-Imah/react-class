import React from 'react'

export const DocumentSegment = props => {
  return(
    <div className="ui icon header">
      <i className="pdf file outline icon"></i>
      <p>No documents are listed for this customer</p>
      <div className="ui primary button">Add Document</div>
    </div>
  )
}