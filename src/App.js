import React, { Component } from "react";
import Header from './components/Header';
import Routes from "./components/Routes";


class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <main>

          <Routes />

        </main>


      </div>
    );
  }
}

export default App;
