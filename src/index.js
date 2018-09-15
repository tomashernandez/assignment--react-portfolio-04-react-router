import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./css/styles.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

class AppWithRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<AppWithRouter />, document.getElementById("app-container"));
registerServiceWorker();
