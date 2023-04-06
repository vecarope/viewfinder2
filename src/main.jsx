import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'tw-elements';
import './index.css';
import './App.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'; 

const domain = `process.env.REACT_APP_AUTH0_DOMAIN`;
const clientId = `process.env.REACT_APP_AUTH0_CLIENTID`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{redirect_uri:window.location.origin}}>
    <App />
    </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
); 
