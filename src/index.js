import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { renderToString } from "react-dom/server";
// import { ServerLocation } from "@reach/router";
import * as serviceWorker from "./serviceWorker";



// createServer((req, res) => {
//     const markup = renderToString(
//     <ServerLocation url={req.url}>
//         <App />
//     </ServerLocation>
//     )
// })




ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
