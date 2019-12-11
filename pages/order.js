import React from 'react'
import Prototype from '../components/prototype'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo'


const GET_ORDERS = gql`

query{
  orders{
    _id
    orderNumber
   	status 
    orderDate
    requiredDate
    shippedDate
  }
}

`



const order = () => {
  const { loading, error, data } = useQuery(GET_ORDERS)

  if (loading) return <p>Loading...</p>


  return (

    <Prototype title="ORDER">

      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr style={{ backgroundColor: 'lightgreen' }}>
            <th><abbr title="orderNumber">OrderNumber</abbr></th>
            <th><abbr title="orderDate">OrderDate</abbr></th>
            <th><abbr title="requiedDate">RequiredDate</abbr></th>
            <th><abbr title="shippedDate">ShippedDate</abbr></th>
            <th><abbr title="Status">Status</abbr></th>

          </tr>
        </thead>

        {data.orders.map(order => {
          return(
            <tbody>
            <tr>
              <td>{order.orderNumber}</td>
              <td>{order.orderDate}</td>
              <td>{order.requiredDate}</td>
              <td>{order.shippedDate}</td>
              <td>{order.status}</td>
            </tr>
          </tbody>
            )
        })}


      </table>

    </Prototype>
  )
}


export default order