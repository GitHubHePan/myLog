import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import  store from './store'
import { BrowserRouter } from 'react-router-dom'

//import  serviceWorker from './serviceWorker';

import './config'
import App from './router'

//serviceWorker()
ReactDOM.render((
    <Provider store={store}>
	    <BrowserRouter>
	    	<App />
	    </BrowserRouter>
    </Provider>
), document.getElementById('root'));