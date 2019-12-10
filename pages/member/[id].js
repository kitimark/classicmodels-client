import { useRouter } from 'next/router'
import Prototype from '../../components/prototype'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Query query={GET_CUSTOMER} variables={{ id }}>
    {({loading, error, data}) => {
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
  )
}

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

const Profile = () => {

  return (
    <Prototype>
      <Post/>
    </Prototype>
  )

}

export default Profile