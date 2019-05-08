import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import {deleteStream} from "../../actions"

class StreamDelete extends React.Component{
  onDelete = () => {
    this.props.deleteStream(this.props.match.params.id)
  }
  render(){
    return(
      <div>
        <h3>Delete Stream</h3>
        <Modal title="Delete Stream" content="Are you sure you want to delete stream" clickAction={this.onDelete}/>
      </div>
    );
  }
}

export default connect(null, {deleteStream})(StreamDelete);
