import React from 'react'
import { useState, useEffect } from 'react'

function App() {

    const [availableItems, setAvailableItems ] = useState(
      [
        {
          id: 1,
          name: "Black T shirt",
          price: 5
        },
        {
          id: 2,
          name: "Hanger Set",
          price: 8
        },
        {
          id: 3,
          name: "Thoub",
          price: 12
        },
        {
          id: 4,
          name: "Computer Bag",
          price: 20
        },
        {
          id: 5,
          name: "Couch",
          price: 50
        },
        {
          id: 6,
          name: "Gaming Chair",
          price: 70
        }
      ]
    )

    const [shoppingCart, setShoppingCart] = useState([]) 

    const [availableBalance, setAvailableBalance] = useState(100)

    function displayAvailableItems() {
      if (availableItems.length > 0) {
        return(
          availableItems.map((oneItem) => 
          
          <div key={oneItem.id}>
            <p>Item Name: {oneItem.name}, Price: {oneItem.price}</p>
            <button onClick={() => {handleAddToCart(oneItem)}}>Add to Cart</button>
          </div>
          
          )
        )
      } else {
        return <p>There are no available Items</p>
      }
    }

    function displayShoppingCart() {
      if (shoppingCart.length > 0) {
        return (
          shoppingCart.map((cartItem) => 
          
          <div>
            <p>{cartItem.name}</p>
            <button onClick={() => {handleRemoveFromShoppingCart(cartItem)}}> Remove From Cart</button>
          </div>
          
          )
        )
      } else {
        return <p>The Cart is Empty </p>
      }
    }

    function handleAddToCart(clickedItem) {
      if (availableBalance < clickedItem.price) {
        return alert('Available Balance is Not Enough')
      }
      const filteredItems = availableItems.filter((item) => {
        return item.id !== clickedItem.id
      })

      setAvailableItems(filteredItems)
      setShoppingCart([...shoppingCart, clickedItem])
      setAvailableBalance(availableBalance - clickedItem.price)
    }

    function handleRemoveFromShoppingCart(clickedItem) {
      const filteredItems = shoppingCart.filter((item) => {
        return item.id !== clickedItem.id
      })

      setShoppingCart(filteredItems)
      setAvailableItems([...availableItems, clickedItem])
      setAvailableBalance(availableBalance + clickedItem.price)
    }


    return (
      <>
        <h1>Sayed Hameds Closet</h1>

        <h2>Your Balance: {availableBalance}</h2>

        <h2>Available Items</h2>
          {displayAvailableItems()}

        <h2>Shopping Cart</h2>
          {displayShoppingCart()}
      </>
    )
}

export default App