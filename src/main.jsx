import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactDOM from "react-dom";
import { browserHistory } from "react-router";
import App from './containers/app'
import registerServiceWorker from './utils/registerServiceWorker'

import './index.css'

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById("root")
);

registerServiceWorker();
("root");
