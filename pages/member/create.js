import React, { useState } from 'react'
import Prototype from '../../components/prototype'
import { gql } from 'apollo-boost'
import {  Mutation } from "react-apollo"


const CREATE_CUSTOMER = gql`
  mutation createCustomer($input: CustomerInput!){
    createCustomer(input: $input){
      _id
    }
  }
`

const Form = () => {

  const [Firstname, setfirstname] = useState('')
  const [Lastname, setlastname] = useState('')
  const [Company, setcompany] = useState('')
  const [Phone, setphone] = useState('')
  const [Addressline1, setaddressline1] = useState('')
  const [Addressline2, setaddressline2] = useState('')
  const [City, setcity] = useState('')
  const [State, setstate] = useState('')
  const [Postalcode, setpostalcode] = useState('')
  const [Country, setcountry] = useState('')

  // console.log(firstname)
  return(

    <>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">NAME</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setfirstname(event.target.value)} class="input" type="text" placeholder="Firstname" />
        </div>
        <div class="field">
          <input onChange={event => setlastname(event.target.value)} class="input" type="text" placeholder="Lastname"  />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">COMPANY</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setcompany(event.target.value)} class="input" type="text" placeholder="Company Name" />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">PHONE</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setphone(event.target.value)} class="input" type="text" placeholder="Phone Number" />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">ADDRESSLINE1</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setaddressline1(event.target.value)} class="input" type="text" placeholder="Your address" />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">ADDRESSLINE2</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setaddressline2(event.target.value)} class="input" type="text" placeholder="Your address" />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">City</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setcity(event.target.value)} class="input" type="text" placeholder="..." />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">State</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setstate(event.target.value)} class="input" type="text" placeholder="..." />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Postal Code</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setpostalcode(event.target.value)} class="input" type="text" placeholder="..." />
        </div>
      </div>
    </div>
      
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Country</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input onChange={event => setcountry(event.target.value)} class="input" type="text" placeholder="..." />
        </div>
      </div>
    </div>

  <Mutation mutation={CREATE_CUSTOMER}>
    {(createCustomer, { data, loading, error }) => (
      <div>
        <form onClick={e =>{
          console.log({ 
            firstName: Firstname, 
            lastName: Lastname, 
            company: Company,
            phone: Phone,
            addresses: [
              {
                addressLine1: Addressline1,
                addressLine2: Addressline2,
                city: City,
                state: State,
                postalCode: Postalcode,
                country: Country
              }
            ]})
          e.preventDefault();
          createCustomer({variables: {input: { 
            firstName: Firstname, 
            lastName: Lastname, 
            company: Company,
            phone: Phone,
            addresses: [
              {
                addressLine1: Addressline1,
                addressLine2: Addressline2,
                city: City,
                state: State,
                postalCode: Postalcode,
                country: Country
              }
            ]
          }}})
        }}
>
<div className="field is-grouped is-grouped-centered">
      <p className="control">
        <a className="button is-primary" type="submit">CREATE</a>
        {loading &&
      <div>adding person…</div>
      }
      { data &&
      <div>response data</div>
      }
      { error &&
      <div>Error adding person…</div>
      }
      </p>
      <p className="control">
        <a className="button is-light">CANCEL</a>
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

const CreateMember = () => (
  <Prototype title="CREATE MEMBER">
    <Form />
  </Prototype>
)


export default CreateMember
