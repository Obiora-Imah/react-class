import React from 'react'
import ReactDOM from 'react-dom'
import { SeasonDisplay } from './SeasonDisplay'
import { Loader } from './Loader'

const Customes  = {
  geoLocation: (callback) => {
    return window.navigator.geolocation.getCurrentPosition(
      (position) => {
        return callback(position)
      },
      (error) => {
        return callback(error);
      }
    );
  }
}

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: ""
  };

  // react life circle hooks for initial render
  componentDidMount() {
    console.log("my component was rendered to the page")
    Customes.geoLocation((position) => {
      this.setState({
        lat: position.coords.latitude
      })
    })
  }

   // react life circle hooks for state update
  componentDidUpdate() {
    console.log("my component was updated")
  } 

  // react life circle hooks for remoing component or cleanups
  componentWillUnmount() {
    console.log("my component was removed")
  }

  render() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: { this.state.errorMessage }</div>
    }

    if(this.state.lat && !this.state.errorMessage) {
      return <div><SeasonDisplay lat={ this.state.lat }/></div>
    }

     return <div>
      <Loader />
     </div>
   
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)

