import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//redux
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import myFirstReducer from './reducer.js';

const rootReducer = combineReducers({ myFirstReducer });
const store = createStore(rootReducer);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
