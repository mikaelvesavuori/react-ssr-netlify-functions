import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Client-side rendering
//ReactDOM.render(<App />, document.getElementById("root"));

// Server-side rendering
const data = window ? window.__INITIAL__DATA__.data : "xxx";
ReactDOM.hydrate(<App data={data} />, document.getElementById("root"));
