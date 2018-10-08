import Show from '../actions';

const initalState = {
    completed: false,
}

function Toggle(state=initalState, action){
    switch(action.type){
        case 'EXPAND':
            return Object.assign({}, state, {
                completed: action.completed,
            })
        default:
            return state
    }
}

export default Toggle