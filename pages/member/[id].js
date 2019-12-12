import { useRouter } from 'next/router'
import Prototype from '../../components/prototype'
import { Query, useApolloClient, Mutation } from 'react-apollo'
import React, { useState, useEffect } from 'react'
import gql from 'graphql-tag'
import Router from 'next/router'

const UPDATE_CUSTOMER = gql`
  mutation updateCustomer($id: String! $input: CustomerInput!) {
    updateCustomer(id: $id, input: $input) {
      _id
    }
  }
`

const GET_CUSTOMER = gql`
  query Customer($id: String!){
    customer(id: $id){
      _id
        firstName
        lastName
        company
        phone
        creditLimit
        addresses{
          addressLine1
          addressLine2
          state
          city
          postalCode
          country
        }
    }
  }
`

const GOTO_INDEX = () => {

  Router.push("/member/index")
}

const Form = () => {

  // const {loading, error, data } = useQuery(GET_CUSTOMER, {
  //   variables: { id },
  // })

  const router = useRouter()
  const { id } = router.query

  const { query, } = useApolloClient()

  const [isUpdated, setUpdated] = useState(false)

  useEffect(() => {
    if (!isUpdated) {
      query({ query: GET_CUSTOMER, variables: { id } }).then(({ data }) => {
        console.log(data)
        setfirstname(data.customer.firstName)
        setlastname(data.customer.lastName)
        setcompany(data.customer.company)
        setphone(data.customer.phone)
        setaddressline1(data.customer.addresses[0].addressLine1)
        setaddressline2(data.customer.addresses[0].addressLine2)
        setcity(data.customer.addresses[0].city)
        setstate(data.customer.addresses[0].state)
        setpostalcode(data.customer.addresses[0].postalCode)
        setcountry(data.customer.addresses[0].country)
      })
      setUpdated(true)

    }
  })

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

  const [isClicked, setClick] = useState(false)

  //  console.log(fisrstname)
  return (
    <>
    {/* <Query query={GET_CUSTOMER} variables={{id}}>
    {
      (loading, error, data) => {
        console.log('yaaa')
        if (loading) return <p>Loading...</p>
        if (error) return <p>{error.message}</p>
          console.log(data)
          setfirstname(data.customer.firstName)
          setlastname(data.customer.lastName)
          setcompany(data.customer.company)
          setphone(data.customer.phone)
          setaddressline1(data.customer.addresses[0].addressLine1)
          setaddressline2(data.customer.addresses[0].addressLine2)
          setcity(data.customer.addresses[0].city)
          setstate(data.customer.addresses[0].state)
          setpostalcode(data.customer.addresses[0].postalCode)
          setcountry(data.customer.addresses[0].country)
        return null
      }
    }
    </Query> */}
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">NAME</label>
        </div>
        <div class="field-body">
          <div class="field">
            <input onChange={event => setfirstname(event.target.value)} onClick={() => { setClick(true) }} value={isClicked ? undefined : Firstname} className="input" type="text" placeholder="Firstname" />
          </div>
          <div class="field">
            <input onChange={event => setlastname(event.target.value)} onClick={() => { setClick(true) }} value={isClicked ? undefined : Lastname} class="input" type="text" placeholder="Lastname" />
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">COMPANY</label>
        </div>
        <div class="field-body">
          <div class="field">
            <input onChange={event => setcompany(event.target.value)} onClick={() => { setClick(true) }} value={isClicked ? undefined : Company} class="input" type="text" placeholder="Company Name" />
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">PHONE</label>
        </div>
        <div class="field-body">
          <div class="field">
            <input onChange={event => setphone(event.target.value)} onClick={() => { setClick(true) }} value={isClicked ? undefined : Phone} class="input" type="text" placeholder="Phone Number" />
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">ADDRESSLINE1</label>
        </div>
        <div class="field-body">
          <div class="field">
            <input onChange={event => setaddressline1(event.target.value)} onClick={() => { setClick(true) }} value={isClicked ? undefined : Addressline1} class="input" type="text" placeholder="Apartment/Room number, Street name" />
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">ADDRESSLINE2</label>
        </div>
        <div class="field-body">
          <div class="field">
            <input onChange={event => setaddressline2(event.target.value)} onClick={() => { setClick(true) }} value={isClicked ? undefined : Addressline2} class="input" type="text" placeholder="Apartment, studio, or floor" />
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal" style={{ marginLeft: "98px" }}>
          <label class="label">CITY</label>
        </div>
        <div class="field-body">
          <div class="field" style={{ marginRight: "71px" }}>
            <input style={{ width: 325 }} onChange={event => setcity(event.target.value)} onClick={() => { setClick(true) }} value={isClicked ? undefined : City} class="input" type="text" />
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">STATE</label>
        </div>
        <div class="field-body">
          <div class="field">
            <input style={{ width: 325 }} onChange={event => setstate(event.target.value)} onClick={() => { setClick(true) }} value={isClicked ? undefined : State} class="input" type="text" />
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal" style={{ marginLeft: "102px" }}>
          <label class="label">POSTALCODE</label>
        </div>
        <div class="field-body">
          <div class="field" style={{ marginRight: "59px" }}>
            <input style={{ width: 325 }} onChange={event => setpostalcode(event.target.value)} onClick={() => { setClick(true) }} value={isClicked ? undefined : Postalcode} class="input" type="text" />
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">COUNTRY</label>
        </div>
        <div class="field-body">
          <div class="field">
            <input style={{ width: 325 }} onChange={event => setcountry(event.target.value)} onClick={() => { setClick(true) }} value={isClicked ? undefined : Country} class="input" type="text" />
          </div>
        </div>
      </div>

      <Mutation mutation={UPDATE_CUSTOMER} variables={{id, input: {
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
        }
      }}>
        {(updateCustomer, { data, loading, error }) => {
          if (data) GOTO_INDEX()
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
            ]
          })
          return (
            <div>
              <form onClick={e => {
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
                  ]
                })
                e.preventDefault();
                updateCustomer({
                  variables: {
                    input: {
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
                    }
                  }
                })
              }}
              >
                <div className="field is-grouped is-grouped-centered">
                  <p className="control">
                    <a className="button is-primary" type="submit">CREATE</a>
                    {loading &&
                      <div>adding person…</div>
                    }
                    {/* {data &&
                    GOTO_INDEX()
                  } */}
                    {error && error.message}
                  </p>
                  <p className="control">
                    <a className="button is-light" onClick={GOTO_INDEX}>CANCEL</a>
                  </p>
                </div>
              </form>
            </div>
          )
        }}
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