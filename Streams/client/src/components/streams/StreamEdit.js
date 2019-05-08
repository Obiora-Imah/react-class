import React from "react"
import { connect } from "react-redux";
import { fetchStream } from "../../actions"

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if(!this.props.stream) {
            return <div>Loading...</div>
        }
        return(
            <div>
                StreamEdit
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.streams)
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, { fetchStream })(StreamEdit);