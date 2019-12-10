import React, { useState } from 'react'
import Prototype from '../components/prototype'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { useQuery } from '@apollo/react-hooks'
import { Dropdown, DropdonwMenu } from '../components/dropdown'

const GET_PRODUCTS = gql`
  query {
    products {
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

const Tablebody = () => (
  <>
    <Lists />
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


          <Query query={GET_PRODUCTS}>
            {({ loading, error, data }) => {
              if (loading) return <p>loading...</p>
              return data.products.map(product => {
                return (
                  <tbody>
                    <th>{product.name}</th>
                    <th>{product.code}</th>
                    <th>{product.scale}</th>
                    <th>{product.vendor}</th>
                    <th>{product.quantityInStock}</th>
                    <th>{product.buyPrice}</th>
                    <th>{product.MSRP}</th>
                  </tbody>
                )
              })
            }}
          </Query>


        </table>
      </div>

    </div>

  </>
)

const GET_LISTS = gql`
  query {
    scaleList
    vendorList
  }
`

const Lists = () => {

  const { loading, error, data } = useQuery(GET_LISTS)
  const [scale, setScale] = useState(null)
  const [vendor, setVendor] = useState(null)

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
  const { loading, error, data } = useQuery(GET_LISTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const { scaleList, vendorList } = data
  // console.log(scaleList)
  // console.log(vendorList)

  return (
    <Prototype title="CATALOG">

      <Tablebody />

    </Prototype>
  )
}


export default Catalog