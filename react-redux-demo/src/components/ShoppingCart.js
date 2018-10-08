import React from 'react'
import Shop from './Shop'
import Cart from './Cart'
import PropTypes from 'prop-types'
import './ShoppingCart.css'

const ShoppingCart = ({onClick, items, cartItems}) => {
    return (
        <div className="ShoppingCart-container">
            <Shop onClick={onClick} items={items}/>
            <Cart cartItems={cartItems}/>
        </div>
    )
}


ShoppingCart.Shop = {
    onClick: PropTypes.func.isRequired,
    items: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
    }),
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
        })
    )
}

export default ShoppingCart