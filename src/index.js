import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import  {robots}  from './robots';
import App from './containers/App';
import 'tachyons';

//import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <div align="center">
  <App/>  
  </div> ,
  document.getElementById('root')
);
//registerServiceWorker();
serviceWorker.unregister();
