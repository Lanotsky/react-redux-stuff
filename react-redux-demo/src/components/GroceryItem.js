import React from 'react'
import PropTypes from 'prop-types'
import './Shop.css'

const GroceryItem = ({onClick, item}) => {
    return (
            <div className="shop-item" >
                <span>{item.name}</span>
                <p>{item.price}</p>
                <button onClick={onClick(item, item.id)}>Add to cart</button>
            </div>
    )
}

PropTypes.GroceryItem = {
    onClick: PropTypes.func.isRequired,
    item: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
    })
}

export default GroceryItem