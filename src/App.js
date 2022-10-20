// import logo from "./logo.svg";
import React from "react";
import { Main } from "./Main.jsx";
import { Navbar } from "./Navbar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CreateBlog } from "./CreateBlog.jsx";
import { BlogDetails } from "./BlogDetails.jsx";
import { NotFoundMes } from "./NotFoundMes.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFoundMes />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
