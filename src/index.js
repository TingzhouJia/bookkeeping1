import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import App from './App';
import {Provider} from 'react-redux'

import { BrowserRouter,Route ,IndexRoute,browserHistory} from 'react-router-dom';
import store from './redux/store'
ReactDOM.render(<Provider store={store}>
    <BrowserRouter > 
                
                <Route to='/home' component={App}/>
    </BrowserRouter>
</Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

