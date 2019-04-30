import React from "react";
import { connect } from "react-redux";

import { fetchPostAnduser } from "../actions"
import UserDetail from "./UserDetail"

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostAnduser();
  }

  renderList() {
    return this.props.posts.map(post=> {
      return (<div className="item" key={ post.id }>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{ post.title }</h2>
            <p>{ post.body }</p>
          </div>
          <br /> 
          < UserDetail  userId={ post.userId }/>
        </div>
      </div>)
      });
  }

  render() {
    // console.log(this.props.posts)
    return <div className="ui relaxed divided list" > { this.renderList() }</div>
  };
}

const mapStateToProps = ({ posts }) => {
  return { posts }
}
export default connect(mapStateToProps,{
  fetchPostAnduser
})(PostList)