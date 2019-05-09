import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

import Modal from "../Modal";
import {deleteStream, fetchStream} from "../../actions"
import history from "../../history";

class StreamDelete extends React.Component{
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }
  actions = () => {
    return (
      // <React.Fragment> the same as <>
      <>
        <div className="ui negative button" onClick={ this.delete }>Delete</div>
        <Link  to="/" className="ui cancel button">Cancel</Link>
      </>
    )
  }
  delete = async () => {
    await this.props.deleteStream(this.props.match.params.id)
    history.push("/");
  }
  renderContent = () => {
    if (!this.props.stream){
     return "Are you sure about this?"
    }
    return `Are you sure you want to delete stream with title: ${this.props.stream.title}`
  }

  render(){
    return(
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.actions}
          whereTo={() => history.push("/")}/>
    );
  }
}

const mapStateToProp = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProp, {fetchStream, deleteStream})(StreamDelete);
