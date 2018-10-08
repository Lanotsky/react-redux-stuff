import {connect} from 'react-redux'
import {toggleTodo, VisibilityFilters} from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter)=>{
    switch(filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(item => item.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(item=>!item.completed)
        default:
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchtoProps,
)(TodoList)

// in charge of creating the container component
// todoList is the component contained?? and populated??

export default VisibleTodoList

