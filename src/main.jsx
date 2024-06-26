import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux';
import { store } from './services/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* provider is used to call api request */}
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
)
