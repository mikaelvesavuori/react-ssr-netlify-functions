import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Client-side rendering
//ReactDOM.render(<App />, document.getElementById("root"));

// Server-side rendering
ReactDOM.hydrate(
	<App data={window.__INITIAL__DATA__.data} />,
	document.getElementById("root")
);
