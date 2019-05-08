import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamCreate from "./streams/StreamCreate";
import Header from "./Header";
import history from "../history";

const App  = () => {
  return (
    <div className="ui container">

      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}/>
          <Route path="/Streams/new" exact  component={StreamCreate}/>
          <Route path="/Streams/Edit/:id" exact component={StreamEdit}/>
          <Route path="/Streams/Delete/:id" exact component={StreamDelete}/>
          <Route path="/Streams/Show" exact component={StreamShow}/>
        </div>
      </Router>
    </div>
  )
}

export default App
