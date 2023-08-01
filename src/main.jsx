import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PostsProvider } from "./containers/app/postContext";
import Routing from './router';

import App from "./containers/app";
import registerServiceWorker from "./utils/registerServiceWorker";

import "./index.css";

render(
  <BrowserRouter>
    <PostsProvider>
      <Routing />
    </PostsProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
