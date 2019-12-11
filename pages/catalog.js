import React, { useState, useEffect } from 'react'
import Prototype from '../components/prototype'
import gql from 'graphql-tag'
import { Query, useApolloClient, useQuery, useMutation } from '@apollo/react-hooks'
import { Dropdown, DropdonwMenu } from '../components/dropdown'
import { prototype } from 'events'

const GET_PRODUCTS = gql`
  query Product($scale: String, $vendor: String){
    products(scale: $scale, vendor: $vendor) {
      _id
      name
      code
      productLine
      scale
      vendor
      description
      quantityInStock
      buyPrice
      MSRP
    }
  }
`

const REMOVE_PRODUCT = gql`
    mutation RemoveProduct($id: String!){
      removeProduct(id: $id){
        _id
      }
    }
`


const Tablebody = () => {
  const [products, setProducts] = useState([])
  const { query , mutate } = useApolloClient()
  
  return (
    <>
      <Lists onChange={async ({ scale, vendor }) => {
        // console.log({ scale, vendor })
        const { data } = await query({
          query: GET_PRODUCTS,
          variables: { scale, vendor }
        })
        setProducts(data.products)
        // console.log(data.products)
        // console.log(products)
      }} />
      <div className="columns">
        <div className="column">
          <table className="table is-fullwidth is-bordered">
            <thead>
              <tr>
                <th><abbr title="Nmae">Name</abbr></th>
                <th><abbr title="Code">Code</abbr></th>
                <th><abbr title="Scale">Scale</abbr></th>
                <th><abbr title="Vendor">Vendor</abbr></th>
                <th><abbr title="ProductLine">ProductLine</abbr></th>
                <th><abbr title="Price">Price</abbr></th>
                <th><abbr title="MSRP">MSRP</abbr></th>
                <th><abbr title="edit">edit</abbr></th>
              </tr>
            </thead>
          
          {products.map(product =>{
            return (
              <tbody>
                <td>{product.name}</td>
                <td>{product.code}</td>
                <td>{product.scale}</td>
                <td>{product.vendor}</td>
                <td>{product.quantityInStock}</td>
                <td>{product.buyPrice}</td>
                <td>{product.MSRP}</td>
                <td>
                  <button className="button is-info" onClick={async () => {
                    await mutate({
                      mutation: REMOVE_PRODUCT, 
                      variables: { id: product._id }
                    })
                    {window.location.reload(); }
                  }}
                  >Remove</button>
                </td>
              </tbody>
            )
          })}

          </table>
        </div>

      </div>

    </>
  )
}
const GET_LISTS = gql`
  query {
    scaleList
    vendorList
  }
`

const Lists = ({ onChange }) => {

  const { loading, error, data } = useQuery(GET_LISTS)
  const [scale, setScale] = useState(undefined)
  const [vendor, setVendor] = useState(undefined)
  
  useEffect(() => {
    onChange({ scale, vendor })
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const { scaleList, vendorList } = data

  return (
    <>
      <div className="columns">
        <div className="column" style={{ display: 'flex' }}>
          <div style={{ margin: 'auto 1rem' }}>
            <p>Scale:</p>
          </div>
          <Dropdown title="scale" placeholder={scale}>
            <DropdonwMenu
              list={[undefined, ...scaleList]}
              onClick={value => {
                setScale(value)
              }}
            />
          </Dropdown>

        </div>
        <div className="column" style={{ display: 'flex' }}>
          <div style={{ margin: 'auto 1rem' }}>
            <p>Vendor:</p>
          </div>
          <Dropdown title="vendor" placeholder={vendor}>
            <DropdonwMenu
              list={[undefined, ...vendorList]}
              onClick={value => {
                setVendor(value)
              }}
            />
          </Dropdown>
        </div>

      </div>

      {/* <button class="button is-dark" onClick={() => setscalestate(scalestate = scaleList)} >Filter</button> */}
    </>
  )

}

const Catalog = () => {
  return (
    <Prototype title="CATALOG">
      <Tablebody />
    </Prototype>
  )
}


export default Catalog