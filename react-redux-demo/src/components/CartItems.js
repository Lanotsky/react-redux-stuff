import React from 'react'
import PropTypes from 'prop-types'
const listStyle = {
    padding: '0px',
    margin: '0px',
    listStyle: 'none',
}

let keyGen = 0

const CartItems = ({itemInfo}) => {
    const listItems = itemInfo.map((t)=>{
        return <li key={keyGen++}>{t}</li>
    })
    return (
        <ul style={listStyle}>{listItems}</ul>
    )
}

PropTypes.CartItems = {
    itemInfo: PropTypes.array,
}

export default CartItems