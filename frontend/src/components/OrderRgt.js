import React from 'react'
import OrderHistory from './OrderHistory'
import Addresses from './Addresses'
import AcDetails from './AcDetails'
import { Outlet } from 'react-router-dom'

function OrderRgt() {
  return (
    <>

    <div className="orderRgt">
        {/* <OrderHistory/> */}
        {/* <Addresses/> */}
        {/* <AcDetails/> */}
        <Outlet/>
    </div>
    
    </>
  )
}

export default OrderRgt