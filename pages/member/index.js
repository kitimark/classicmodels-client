import React from 'react'
import Prototype from '../../components/prototype'
import { Query, useApolloClient, useQuery, useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import Popup from 'reactjs-popup'
import Post from './[id]'


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
          postalCode
        }
      }
    }

`
const GET_CUSTOMER = gql`
    query Customer($id: String!) {
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
          city
          postalCode
        }
      }
    }

`

const REMOVE_CUSTOMER = gql`
    mutation removeCustomer($id: String!){
      removeCustomer(id: $id){
        _id
      }
    }
`

// const Search = () => (
//   <div className="field has-addons ">
//     <div className="control is-expanded">
//       <input className="input"  type="text" placeholder="Enter Id,Name,..."/>
//     </div>
//     <div className="control">
//       <a className="button is-info">
//         Search
//       </a>
//     </div>
//   </div>
//   )

const Tablebody = () => {
  const { loading, error, data } = useQuery(GET_CUSTOMERS)
  const { query, mutate } = useApolloClient()

  if( loading) return <p>loading...</p>
  // const [ addTodo, { data }] = useMutation(REMOVE_CUSTOMER)
  return (
    <>
      {/* <div className="columns">
      <div className="column is-centered">
        <Search/>
      </div>  
    </div> */}
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
            
            {data.customers.map(customer => {
              return (
                <tbody>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.company}</td>
                  <td>{customer.creditLimit}</td>
                  <td>{customer.addresses[0].addressLine1}</td>
                  <div className="control column">
                    <Popup trigger={<button className="button is-info" > Profile </button>} modal closeOnDocumentClick>
                      <span>
                        <Query query={GET_CUSTOMER} variables={{ id: customer._id }}>
                          {({ loading, error, data }) => {
                            if (loading) return <p>loading...</p>
                            if (error) return <p>error</p>
                            const { customer } = data

                            const addresses = customer.addresses.map(customer => {
                              return (
                                <>
                                  <p>AddressLine1:{customer.addressLine1}</p>
                                  <p>AddressLine2:{customer.addressLine2}</p>
                                  <p>City:{customer.city}</p>
                                  <p>PostalCode:{customer.postalCode}</p>
                                </>
                              )
                            })
                            return (
                              <div>
                                <p>FirstName :{customer.firstName} </p>
                                <p>Lastname:{customer.lastName}</p>
                                <p> Company:{customer.company} </p>
                                <p>Phone:{customer.phone}</p>
                                <p>CreditLimit:{customer.creditLimit}</p>
                                {addresses}
                              </div>
                            )
                          }}
                        </Query>
                      </span>
                    </Popup>
                  </div>
                

                  <button className="button is-info" onClick={async () => {
                    await mutate({
                      mutation: REMOVE_CUSTOMER,
                      variables: {
                        id: customer._id
                      }
                    })
                    window.location.reload(); 
                  }}
                  >Remove</button>
                  

                </tbody>
              )
            })

            }

          </table>
        </div>

      </div>

    </>
  )
}

const Member = () => (
  <Prototype title="MEMBER">
    <Tablebody />
  </Prototype>
)

export default Member