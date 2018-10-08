import {ADD_TO_CART} from '../actions/index'
import {startState} from '../actions/initState'

const cart = (state=startState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return Object.assign({}, state, {
                cartItems: [
                    ...state.cartItems, 
                    {
                        id: action.item.id,
                        name: action.item.name,
                        price: action.item.price,
                    }
                ]
            })
    default:
        return state
    }

}

export default cart