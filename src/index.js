import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from "./features/Employee";
import loginReducer from "./features/Login";

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=configureStore({
    reducer:{
        employees:employeeReducer,
        login:loginReducer,
      
    }
},composeEnhancers());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      
        <App />
     
    </Provider>
);


