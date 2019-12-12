import React, { useState } from 'react'
import Prototype from '../../components/prototype'
import { gql } from 'apollo-boost'
import {  Mutation } from "react-apollo"
import Router from 'next/router'

const CREATE_COUPON = gql`
  mutation createCoupon($input: CouponInput!){
    createCoupon(input: $input){
      _id
    }
  }
`
const GOTO_INDEX = () =>{
  
  Router.push("/discount/index")
  window.location.reload(); 
}
const Form = () => {

  const [Sale, setsale] = useState('')
  const [Expireddate, setexpireddate] = useState('')
  const [Totallity, settotallity] = useState('')
  return(
    <>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">SALE</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setsale(event.target.value)} class="input" type="text" placeholder="Enter discount percent" />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">EXPIRED DATE</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setexpireddate(event.target.value)} class="input" type="text" placeholder="Enter Coupon expired date" />
        </div>
      </div>
    </div>


    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">TOTALLITY</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => settotallity(event.target.value)} class="input" type="text" />
        </div>
      </div>
    </div>


    

  <Mutation mutation={CREATE_COUPON}>
    {(createCoupon, { data, loading, error }) => (
      <div>
        <form onClick={e =>{
          e.preventDefault();
          createCoupon({variables: {input: { 
            sale: Sale, 
            expiredDate: Expireddate, 
            totallity: parseInt(Totallity)
            
          }}})
        }}
>
<div className="field is-grouped is-grouped-centered">
      <p className="control">
        <a className="button is-primary" type="submit">CREATE</a>
        {loading &&
      <div>adding ...</div>
      }
      { data &&
      GOTO_INDEX()
      }
      { error && error.message }
      </p>
      <p className="control">
        <a className="button is-light" onClick={GOTO_INDEX}>CANCEL</a>
      </p>
    </div>
</form>
      </div>
    )
    }  
    </Mutation>   
  </>
)
}

const CreateCouponsdiscount = () => (
  <Prototype title="CREATE COUPON">
    <Form />
  </Prototype>
)


export default CreateCouponsdiscount