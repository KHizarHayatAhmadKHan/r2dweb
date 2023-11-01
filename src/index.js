import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import details_header from './Pages/CarDetails/Details_header/details_header';
import Head_details from './Pages/CarDetails/Details_header/Head_details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head_details/>
    {/* <App /> */}
  </React.StrictMode>
);

reportWebVitals();
