import React, { useState } from 'react'
import Prototype from '../components/prototype'
import { useApolloClient } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { counter } from '@fortawesome/fontawesome-svg-core'

const GET_CUSTOMER = gql`
  query Customer($id: String!) {
    customer(id: $id){
      firstName
      lastName
    }
  }
`
const GET_PRODUCT = gql`
  query Product($code: String!){
    product(code: $code){
      code
      name
      buyPrice
    }
  }
`

const Textbar = ({ name, class1, type, place, butt, onClick }) => {
  const [ value, setValue ] = useState('')
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{name}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control">
            <input 
              className={class1} 
              type={type} 
              placeholder={place} 
              onChange={event => {
                setValue(event.target.value)
              }}
            />
          </p>
        </div>
      </div>

      <div className="control">
        <a className="button is-info" onClick={() => {onClick(value)}}>
          {butt}
        </a>
      </div>
    </div>
  )
}


const Textbar2 = ({ name, place }) => {

return (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label ">{name}</label>
    </div>
    <div className="field-body ">
      <div className="field">
        <p className="control" style={{margin:"7px"}}>
          {place} 
        </p>
      </div>
    </div>
  </div>

)
}
const list =[]

const Profile = ({name,user,type}) => {
  if (user) {
    return <Textbar2 name={name} place={user[type]} ></Textbar2>
  }else {
    return null
  }
}

const ProductList = ({items}) => {
  return items.map(item => {
    return  <Textbar2 name="ProductName"  place={item.name} ></Textbar2>
  })
}

const Checkout = () => {
  const [user, setUser] = useState(null)
  const [items, setItems] = useState([])
  const { query } = useApolloClient()
  return (
  <Prototype title="CHECKOUT">
  <>
    
    <Textbar 
      name="Customer" 
      class1="input" 
      type="text" palce="" 
      butt=" Search"
      onClick={async id => {
        const { data } = await query({ query: GET_CUSTOMER, variables: { id } })
        setUser(data.customer)
      }}
    ></Textbar>

    <Profile name="firstName" user={user} type="firstName"/>


    <Textbar name="Product" class1="input" type="text" palce="" butt=" Search"  
      onClick={async code  => {
        const { data } = await query({ query: GET_PRODUCT, variables: { code } })
        setItems(oldItems => [...oldItems, data.product])
      }}
    ></Textbar> 
    
    <ProductList items={items} />
    <Textbar name="Promocode" class1="input" type="text" palce="" butt="Search"></Textbar>
    {/* <Textbar2 name="Point" ></Textbar2> */}

    <div className="field is-grouped is-grouped-right">
      <div className="control">
        <button className="button is-success is-rounded">Checkout</button>
      </div>
    </div>

  </>
  </Prototype>
)
}


export default Checkout