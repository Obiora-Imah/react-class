import React from "react";
import { connect } from "react-redux";

// not in use but needed only if i need to make a single call to individual action or memoized action
import { fetchUserMemoized, fetchUserRaw } from "../actions"

class UserDetail extends React.Component {
  // componentDidMount() {
  //   console.log(this)
  //   this.props.fetchUser(this.props.userId);
  // }

  render() {
   
    if(!this.props.user) {
      return null;
    }
    return <div> { this.props.user.name }</div>
  };
}

const mapStateToProps = (state, ownProps) => {
  const user =  state.users.find(user => user.id === ownProps.userId)
  return { user }
}
export default connect(mapStateToProps,{
  
})(UserDetail)