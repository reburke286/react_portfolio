import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
    <BrowserRouter>
        <NavBar />
          <Switch>
          <Route
            exact path="/"
            component={Landing}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/msg" />
          </Switch>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
