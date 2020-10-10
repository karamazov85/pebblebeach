import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Home from "./pages/home";
import About from "./pages/About";
import Post from "./pages/post";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import NotFound from "./pages/NotFound";

ReactDOM.render(
  <div className="layout">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/post/:id" render={(props) => <Post {...props} />} />
        <Route exact path="/404" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
