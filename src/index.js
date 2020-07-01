import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Client-side rendering
//ReactDOM.render(<App />, document.getElementById("root"));

// Server-side rendering
// window.__INITIAL__DATA__.data
ReactDOM.hydrate(<App data={"asdasda"} />, document.getElementById("root"));
