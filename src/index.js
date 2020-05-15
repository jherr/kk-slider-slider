import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App
      slides={[
        "/albums/cover1.png",
        "/albums/cover2.png",
        "/albums/cover3.png",
        "/albums/cover4.png",
        "/albums/cover5.png",
        "/albums/cover6.png",
        "/albums/cover7.png",
        "/albums/cover8.png",
      ]}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
