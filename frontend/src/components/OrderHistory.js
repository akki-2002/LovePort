import React from 'react'
import { Link } from 'react-router-dom'
import rgtarrow from '../components/Images/rgtarrow.png'

function OrderHistory() {
  return (
    <>

    
    <div className="orderHistoryMain">
    <table className="orderHistory">
            <thead>
                <tr className="ohisHeading">
                    <th>ORDER</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                    <th>TOTAL</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                <tr className="ohisHead1 ohisHead11">
                    <td>#2312001</td>
                    <td>2/12/2023</td>
                    <td>Completed</td>
                    <td>₹799 for 1 item</td>
                    <td>
                        <button>VIEW</button>
                        <button>VIEW INVOICE</button>
                    </td>
                </tr>
                <tr className="ohisHead1">
                    <td>#2312021</td>
                    <td>16/12/2023</td>
                    <td>Payment Pending</td>
                    <td>₹1899 for 3 items</td>
                    <td>
                        <button>PAY</button>
                        <button>VIEW</button>
                        <button>CANCEL</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div className="orderHisExplore">
        
        <p>Explore more of our Amazing Collection <Link to={'/'} ><img src={rgtarrow} alt="" /></Link></p>
        </div>
    
    </div>
    
    </>
  )
}

export default OrderHistory