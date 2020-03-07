import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Wrapper>
          <Route
            exact
            path="/"
            render={() => {
              return <h1>About Becca</h1>;
            }}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
