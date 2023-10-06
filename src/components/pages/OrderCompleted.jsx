import React from 'react'
import { Link } from 'react-router-dom'

const OrderCompleted = () => {
  return (
    <>
    <div>
      <p>Your Payment was Successfull</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        <Link to="/products">See Products</Link>
        </button>    
    </div>
    </>
  )
}

export default OrderCompleted
