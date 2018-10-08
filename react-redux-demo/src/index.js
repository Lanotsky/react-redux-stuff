import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App'
import cart from './reducers/cart'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

let store = createStore(cart)
console.log('store init state')
console.log(store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
