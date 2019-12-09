import React, { useState, useEffect } from 'react'
import Prototype from '../components/prototype'
import gql from 'graphql-tag'
import { useQuery, useApolloClient } from '@apollo/react-hooks'
import { Dropdown, DropdonwMenu } from '../components/dropdown'

const GET_PRODUCTS = gql`
  query Product($scale: String, $vendor: String){
    products(scale: $scale, vendor: $vendor) {
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

const Search = () => (

  <div className="field has-addons ">
    <div className="control is-expanded">
      <input className="input" type="text" placeholder="Find a repository" />
    </div>
    <div className="control">
      <a className="button is-info">
        Search
      </a>
    </div>
  </div>

)

const Tablebody = () => {
  const [products, setProducts] = useState([])
  const { query } = useApolloClient()
  
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
        <div className="column is-centered">
          <Search />
        </div>
      </div>
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
              </tr>
            </thead>
          
          {products.map(products =>{
            return (
              <tbody>
                <th>{products.name}</th>
                <th>{products.code}</th>
                <th>{products.scale}</th>
                <th>{products.vendor}</th>
                <th>{products.quantityInStock}</th>
                <th>{products.buyPrice}</th>
                <th>{products.MSRP}</th>
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
        <div className="column">
          <p>Scale:</p>
          <Dropdown title="scale" placeholder={scale}>
            <DropdonwMenu
              list={scaleList}
              onClick={value => {
                setScale(value)
              }}
            />
          </Dropdown>

        </div>
        <div className="column">
          <p>Vendor:</p>
          <Dropdown title="vendor" placeholder={vendor}>
            <DropdonwMenu
              list={vendorList}
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