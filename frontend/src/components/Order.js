import React from 'react'
import './css/order.css'
import OrderLeft from './OrderLeft'
import OrderRgt from './OrderRgt'

function Order() {
  return (
    <>
    <div className="order">
    <OrderLeft/>
    <OrderRgt/>
    </div>
    </>
  )
}

export default Order