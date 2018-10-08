import {connect} from 'react-redux'
import Show from '../actions/index'
import Expandable from '../components/Expandable'

const mapStateToProps = state => {
    return {
        completed: state.completed,
    }
}

