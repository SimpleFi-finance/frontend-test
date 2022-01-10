import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/index';
import { ChartContainer } from './components/chartContainer'; 

ReactDOM.render(
  <React.StrictMode>
    <App>
      <ChartContainer/>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);