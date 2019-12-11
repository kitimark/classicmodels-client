import React from 'react'
import Prototype from '../../components/prototype'
import gql from 'graphql-tag'
import { useQuery, useApolloClient } from '@apollo/react-hooks'
import { Query } from 'react-apollo'
import Router from 'next/router'

const GET_COUPONS = gql`
query{
  coupons{
    _id
    sale
    expiredDate
    totallity
    remainder
  }
}
`

const GOTO = () =>{
  Router.push("/discount/create")
}

const Create = () => (
  <div className = "field">
    <div className="control">
        <a className="button is-success" onClick={GOTO} >Create</a>
    </div>
  </div>
)

const Tablebody = () => {
  return (
    <div>
      <div className="columns">
        <div className="column is-centered">
          <Create/>
        </div>  
    </div>
      <div className="columns">
        <div className="column">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th><abbr title="_id">_id</abbr></th>
                <th><abbr title="Sale">sale</abbr></th>
                <th><abbr title="ExpriedDate">expiredDate</abbr></th>
                <th><abbr title="totallity">totallity</abbr></th>
                <th><abbr title="remainder">remainder</abbr></th>
              </tr>
            </thead>
            <Query query={GET_COUPONS}>
              {({ loading, error, data }) => {
                if (loading) return <p>loading...</p>
                if (error) return <p>error</p>
                const { coupons } = data
                return coupons.map(coupon => {
                  return (
                    <tbody>
                      <td>{coupon._id}</td>
                      <td>{coupon.sale}</td>
                      <td>{coupon.expiredDate}</td>
                      <td>{coupon.totallity}</td>
                      <td>{coupon.remainder}</td>
                    </tbody>
                  )
                }
                )
              }}
            </Query>
          </table>
        </div>
      </div>
    </div>
  )
}



const Inputbar = ({ text1, placeholder1 }) => (

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">{text1}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder={placeholder1} />
        </div>
      </div>
    </div>
  </div>


)


const Discount = () => (
  <>
    <Prototype title="DISCOUNT">
      <Tablebody />
      {/* <th>Add Promotion</th>
   
   <Inputbar text1="Promotion" placeholder1="Promotion.."/>
   <Inputbar text1="Start date" placeholder1="date.."/>
   <Inputbar text1="Expire date" placeholder1="Expire date.."/>
   <Inputbar text1="Drecreas" placeholder1="Decreas.."/>
 
   <div className="field is-grouped is-grouped-right">
  <div className="control">
    <button className="button is-success is-rounded">Submit</button>
  </div>
  </div> */}


    </Prototype>
  </>
)


export default Discount