import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducers'
import App from './components/App'
/*
// the store will take the reducer todoApp as the argument
// may also hydrate the state of the store
// e. g store = createStore(todoApp, window.STATE_FROM_SERVER)
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
  } from './actions'
// action constants types

let store = createStore(todoApp)

console.log(store.getState())
let unsubscribe = store.subscribe(()=>(
    console.log(store.getState())
))

// dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(toggleTodo(2))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
// Stop listening to state updates
unsubscribe()
*/

let store =  createStore(todoApp);

ReactDOM.render(
    <div>
        <hr />
            <Provider store={store}>
                <App />
            </Provider>
    </div>,
    document.getElementById('root')
);

