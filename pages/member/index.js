import React from 'react'
import Prototype from '../../components/prototype'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'

const GET_CUSTOMERS = gql`
    query {
      customers {
        _id
        firstName
        lastName
        company
        phone
        creditLimit
        addresses{
          addressLine1
          addressLine2
          city
          portalCode
        }
      }
    }

`

const Search = () => (

  <div className="field has-addons ">
    <div className="control is-expanded">
      <input className="input" type="text" placeholder="Enter Id,Name,..." />
    </div>
    <div className="control">
      <a className="button is-info">
        Search
      </a>
    </div>
    <div className="control">
      <Link href="member/create">
        <a className="button is-success" >Create</a>
      </Link>
    </div>
  </div>
)



const Tablebody = () => (
  <>
    <div className="columns">
      <div className="column is-centered">
        <Search />
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th><abbr title="Firstname">Fname</abbr></th>
              <th><abbr title="Lastname">Lname</abbr></th>
              <th><abbr title="Phone">Phone</abbr></th>
              <th><abbr title="Company">Company</abbr></th>
              <th><abbr title="CreditLimit">CreditLimit</abbr></th>
              <th><abbr title="addressline1">Addressline1</abbr></th>
            </tr>
          </thead>

          <Query query={GET_CUSTOMERS}>
            {({ loading, error, data }) => {
              if (loading) return <p>loading...</p>
              console.log(error)
              if (error) return <p>error</p>
              // console.log(data)
              return data.customers.map(customer => {
                return (
                  <tbody>
                    <th>{customer.firstName}</th>
                    <th>{customer.lastName}</th>
                    <th>{customer.phone}</th>
                    <th>{customer.company}</th>
                    <th>{customer.creditLimit}</th>
                    <th>{customer.addresses[0].addressLine1}</th>
                    <div className="control">
                      <a className="button is-info" href={`/member/${customer._id}`}>Profile</a>
                    </div>

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


const Member = () => (
  <Prototype title="MEMBER">
    <Tablebody />
  </Prototype>
)

export default Member