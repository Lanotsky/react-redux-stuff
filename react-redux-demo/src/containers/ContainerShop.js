import ShoppingCart from '../components/ShoppingCart'
import {addToCart} from '../actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        items: state.groceryItems,
        cartItems: state.cartItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (item, id) => {
            return ()=> {
                dispatch(addToCart({
                    id: id,
                    name: item.name,
                    price: item.price
                }))
            }
        }
    }
}

const ContainerShop = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShoppingCart)

export default ContainerShop