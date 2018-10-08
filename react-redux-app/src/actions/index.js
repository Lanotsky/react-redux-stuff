// action is just an object with a type: constant 

// Type constants for our actions
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
// other constatnts 
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }
// action creators
let todoId = 0
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: todoId++,
        text,
    }
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id,
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter,
    }
}

// normally actions in flux are dispached i.e dispatch(action) or dispatch(addTodo('todo item'))
// bound action boundAddTodo = text => dispatch(addTodo('text'))
// bound items can be called directly i.e boundAddTodo('text')
// dispatch() can be accessed as store.dispatch()

// connect() if using react-redux
// also has bindActionCreators()

