import React from "react";
import { Switch, Route, Router } from "react-router-dom";
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
          <Switch>
            <Route path="/" exact component={StreamList}/>
            <Route path="/Streams/new" exact  component={StreamCreate}/>
            <Route path="/Streams/Edit/:id" exact component={StreamEdit}/>
            <Route path="/Streams/Delete/:id" exact component={StreamDelete}/>
            <Route path="/Streams/:id" exact component={StreamShow}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
