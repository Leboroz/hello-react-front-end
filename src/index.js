import App from './App';
import React from 'react'
import './index.css';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import configureStore from './store';

const messageStore = configureStore();
const root = createRoot(
  document.getElementById('root')
);

root.render(
  <Provider store={ messageStore }>
    <App />
  </Provider>
);
