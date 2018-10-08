import React from 'react'
import PropTypes from 'prop-types'
import GroceryItem from './GroceryItem'
import './Shop.css'

const extractObjects = (array, num=array.length)=> {
	let obj = []
	let count = 0;
	for(let i = array.length-1; i >= (array.length - num); i--) {
		obj.splice(count, 0, array[i])
		count++
	}
	return obj
}


const Shop = ({onClick, items}) => {
    const returnedIndexSize = 3
    const groceryItems = extractObjects(items, returnedIndexSize)
    return (
        <div className="container-shop">
            <GroceryItem onClick={onClick} item={groceryItems[0]} value={groceryItems[0].id}/>
            <GroceryItem onClick={onClick} item={groceryItems[1]} value={groceryItems[1].id}/>
            <GroceryItem onClick={onClick} item={groceryItems[2]} value={groceryItems[2].id}/>
        </div>
    )
}

PropTypes.Shop = {
    onClick: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
    }))
}

export default Shop