import React from 'react'
import Prototype from '../components/prototype'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

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
      <input className="input"  type="text" placeholder="Find a repository"/>
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
    <div className="columns">
      <div className="column is-centered">
        <Search/>
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
              {({loading, error, data}) => {
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



const Catalog = () => (
<Prototype title="CATALOG">
  <Tablebody/> 
  
</Prototype>
)


export default Catalog