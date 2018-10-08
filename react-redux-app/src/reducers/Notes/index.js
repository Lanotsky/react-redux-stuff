import {combineReducers} from 'redux'
import {VisibilityFilters} from '../actions'
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
} from '../actions'
// Reducers takes an action and applies it to the state
// Describes the state changes in response.
// Reducers are pure functions that takes the previous state, the action to change it and returns the new state


// Starting state
const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [],
}

// ES6 syntax where if state is undefined set it to initialState
/*
const toDoApp = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return Object.assign({}, state, {
                visibilityFilter: action.filter,
            })
        case 'ADD_TODO':
            return Object.assign({},state, {
                todos: [
                    // concats the previous array elements
                    ...state.todos,
                    // adds a new array element
                    {
                        text: action.text,
                        completed: false,
                    }
                ]
            })
        case 'TOGGLE_TODO':
            return Object.assign({},state, {
                todos: state.todos.map((todo, index)=>{
                    // since inside the todos is the todo array of individual objs we need to map its elements
                    // map function creates a new array and updates it with no mutations
                    if(index===action.index) {
                        // individual todo
                        return Object.assign({}, todo, {
                            completed: !todo.completed,
                        })
                    }
                })
            })
        default:
            return state
    }
    return state
}
*/


// Cleaning up
// we can split the function by moving todos into a separate function
// since our the two cases are concerned with updating todo array and objects

const todos = (state=[], action)=>{
    switch (action.type){
        case 'ADD_TODO':
        return [
            ...state,
            {
              text: action.text,
              completed: false
            }
          ]
        case 'TOGGLE_TODO':
        return state.map((todo, index) => {
            if (index === action.index) {
              return Object.assign({}, todo, {
                completed: !todo.completed
              })
            }
            return todo
          })
    default:
        return state
    }

}

// Refactor 

/*
const todoApp = (state=initialState, action)=>{
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return Object.assign({}, state, {
                visibilityFilter: action.filter,
            })
        // if its ADD_TODO or TOGGLE_TODO  
        case 'ADD_TODO':
        case 'TOGGLE_TODO':
        // do this   
            return Object.assign({},state,{
                todos: todos(state.todos, action),
            })
        default:
            return state
    }
}
*/

// Refactor and compose reducers

// ES6 Object destructuring
const {SHOW_ALL} = VisibilityFilters

const visibilityFilter = (state=SHOW_ALL, action)=>{
    switch(action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

// What reducer composition looks like
// The functions defined above is composed into the todoApp

/*
const todoApp = (state={}, action)=>{
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}
*/


// Redux provides the utility that does the above function with less boilerplate

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp