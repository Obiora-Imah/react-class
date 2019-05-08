import React from "react";
import ReactDOM  from "react-dom";
import history from "../history";

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active"  onClick={()=>history.push("/")}>
      <div className="ui standard modal visible active" onClick={(e)=> e.stopPropagation()} >
        <div className="header">{props.title}</div>
        <div className="content">
          <p>
            { props.content }
          </p>
        </div>
        <div className="actions">
          <div className="ui primary button" onClick={ props.clickAction}>Delete</div>
          <div className="ui cancel button">Cancel</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  )
}

export default Modal;
