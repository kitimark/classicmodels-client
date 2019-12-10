import React, { useState } from 'react'
import Prototype from '../components/prototype'
import { useApolloClient } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

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

const Input = ({ title, placeholder, buttonName, onClick }) => {
  const [value, setValue] = useState('')
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{title}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control">
            <input
              className="input"
              type="text"
              placeholder={placeholder}
              onChange={event => {
                setValue(event.target.value)
              }}
            />
          </p>
        </div>
      </div>

      <div className="control">
        <a className="button is-info" onClick={() => { onClick(value) }}>
          {buttonName}
        </a>
      </div>
    </div>
  )
}

const Customer = () => {
  const [user, setUser] = useState(null)
  const { query } = useApolloClient()
  return (
    <>
      <Input
        title="Customer"
        placeholder="Name"
        buttonName="Search"
        onClick={async id => {
          const { data } = await query({ query: GET_CUSTOMER, variables: { id } })
          setUser(data.customer)
        }}
      />
      <Profile user={user} />
    </>
  )
}

const Profile = ({ user }) => {
  if (user) {
    return <p>Yaaaa</p>
  } else {
    return null
  }
}

const Productlist = () => {
  const [items, setItems] = useState([])
  const { query } = useApolloClient()
  return (
    <>
      <Input
        title="ProductName"
        placeholder="Name"
        buttonName="Search"
        onClick={async code => {
          const { data } = await query({ query: GET_PRODUCT, variables: { code } })
          if (data.product) setItems(oldItems => [...oldItems, data.product])
        }}
      />
      <ProfileProductList
        items={items}
        onDelete={delete_item => {
          const index = items.indexOf(delete_item)
          // Duplicate item to arr
          const arr = [...items]
          arr.splice(index, 1)
          setItems(arr)
        }}
      />
    </>
  )
}

const ProfileProductList = ({ items, onDelete }) => {
  if (items) {
    return (
      items.map(item => {
        return (
          <Item item={item} onDelete={delete_item => onDelete(delete_item)} />
        )
      })
    )
  } else {
    return null
  }
}

const Item = ({ item, onDelete }) => {
  // state
  const [count, setCount] = useState(0)

  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">{/* เว้นไว้เพราะจะได้ช่องเท่ากัน */}</div>
      <div className="field-body">
        <div className="field">
          <p className="control" style={{ margin: "7px" }}>{item.name}</p>
        </div>
      </div>
      <a
        className="button is-danger is-active"
        onClick={() => {
          if (count <= 0) {
            onDelete(item)
          } else {
            setCount(count - 1)
          }
        }}>-</a>
      <a className="button is-success is-active" onClick={() => setCount(count + 1)} >+</a>
      <a className="button is-danger is-active">count: {count}</a>
    </div>)
}

const Checkout = () => {
  return (
    <Prototype title="CHECKOUT">
      <Customer />
      <Productlist />
    </Prototype>
  )
}


export default Checkout