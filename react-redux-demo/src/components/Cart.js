import React from 'react'
import './Cart.css'
import PropTypes from 'prop-types'
import CartItems from './CartItems'

const Cart = ({cartItems})=> {
    let names = []
    let prices = []
    let runningTotal = 0
    const extractIndexObj = (array) => {
        if(array===undefined) {
            return false
        }
    
        for(let i = 0; i < array.length; i++){
            names = [...names, array[i].name]
            prices = [...prices, array[i].price]
            runningTotal += array[i].price
        }
    }
    
    extractIndexObj(cartItems)
    return (
        <div className="container-cart">
            <div className="cart-row">
                <div>Item</div>
                <CartItems itemInfo={names}/>
            </div>

            <div className="cart-row">
                 <div>Price</div> 
                 <CartItems itemInfo={prices}/>
            </div>

            <div className="cart-row">
                <div>Items in cart</div>
                {cartItems.length}  
            </div>

            <div className="cart-row">
                <div>Total</div> 
                {runningTotal} 
            </div>
        </div>
    )
}

PropTypes.Cart = {
    cartItems: PropTypes.array,
}

export default Cart