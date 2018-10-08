import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

// this is a functional container that can render and populate the props at the 
// same time

let AddTodo = ({dispatch}) => {
    let input;

    return (
        <div>
            <form
                onSubmit={event=>{
                    event.preventDefault()
                    if(!input.value.trim()){
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''                    
                }}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                    />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo