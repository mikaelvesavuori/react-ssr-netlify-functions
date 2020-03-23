// Imports
import path from "path";
import serverless from "serverless-http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import React from "react";
import { renderToString } from "react-dom/server";

// Import helpers
import { getHtml } from "./getHtml";
import { style } from "./style";

// Import React application
import App from "../src/App";

// Setup for Express
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use("assets", express.static(path.resolve(__dirname, "./assets")));

// Data to pass down, could be things like server headers or data fetched from an API
const data = {
	data: "Something here"
};

// Helper variables
const FUNCTION_NAME = "ssr";
const BASE_PATH =
	process.env.NODE_ENV === "dev"
		? `/${FUNCTION_NAME}`
		: `/.netlify/functions/${FUNCTION_NAME}/`;

// Routing
app.get(BASE_PATH, (req, res) => {
	const REACT_HTML = renderToString(<App data={data} />);

	const HTML = getHtml({
		title: "React SSR",
		body: REACT_HTML,
		data: data,
		styles: style
	});

	res.send(HTML);
});

exports.handler = serverless(app);
