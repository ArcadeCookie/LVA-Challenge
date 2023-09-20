import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App year={"2022"} month={"Junio"}/>
  </React.StrictMode>
);

