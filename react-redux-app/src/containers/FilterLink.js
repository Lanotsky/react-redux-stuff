import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import Link from '../components/Link'

// sets the value for active in the Link component
// by checking if the state.setVisibilityFilter is equal to FilterLink.filter
// e.g 'SHOW_ALL' === 'SHOW_ALL' etc
const mapStateToProps = (state, ownProps) =>{
    return {
        active: state.setVisibilityFilter === ownProps.filter
    }
}

// always takes a dispatch as an argument . . . 
const mapDispatchToProps = (dispatch, ownProps)=>{
    return{
        onClick: ()=> {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

// Note: The mapStateToProps only will assign the data from the redux state to a usable prop
// the mapStateToProps will update as the state updates
// mapDispatchToProps is responsible for updating the state via the dispatch
// returns the props that use the dispatch method to dispatch actions
    // the store.dispatch(action) is the only way to update the state
    // store.dispatch(action) will call the store's reducing function will be called 
    // with the current getState() result and the given action synchronously. 
    // Its return value will be considered the next state. It will be returned from getState() from 
    // now on, and the change listeners will immediately be notified.
//

// generates a container component provided by the library
// see more on container components
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link)
// curried function. Need to be called twice. Note the new parameter Link. See more for curried functions

export default FilterLink