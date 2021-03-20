import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* <Route path="/" exact={true} component={Home} >
        <h1>Home</h1>
      </Route>
      <Route path="/about" component={About}>
        <h1>About</h1>
      </Route> */}
      <Route path="/" exact={true} component={Home} /> {/* exact={true} : 오로지 이것만 랜더링함 */}
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;