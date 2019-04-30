import React from 'react'
import ReactDOM from 'react-dom'
import Faker from "faker"
import { CommentDetail } from './CommentDetail'
import  { ApprovalCard }  from './ApprovalCard'
import  { Segment }  from './Segment'
import  { DocumentSegment }  from './DocumentSegment'
import  { ContentSegment }  from './ContentSegment'
import  { SearchBar }  from './SearchBar'
const App = () => {
  let now = (new Date).toLocaleTimeString();
  return( 
    <div className="ui container comments">
      <SearchBar />
      <Segment>
        <DocumentSegment />
      </Segment>
      <Segment>
        <ContentSegment />
      </Segment>

      <ApprovalCard>
      <div>Warning!!! Are you sure about this?</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Obiora"
          time={ "Today at " + now}
          avatar={Faker.image.avatar()}
          comment={'So cool'}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Chima"
          time={"Today at " + now}
          avatar={Faker.image.avatar()}
          comment={'This awesome'}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Izu"
          time={"Today at " + now} 
          avatar={Faker.image.avatar()}
          comment={'Keep the grind on'}
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)