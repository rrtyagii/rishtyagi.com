

// In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the different <Link>s, the router renders the matching <Route>.

// Note: Behind the scenes a <Link> renders an <a> with a real href, so people using the keyboard for navigation or screen readers will still be able to use this app.

import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./HomePage/Home";
import AboutMe from "./AboutMe/aboutme";
import Portfolio from "./Portfolio/portfolio";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolios />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <Home/>;
}

function About() {
  return <AboutMe/>;
}

function Portfolios() {
  return <Portfolio/> ;
}
