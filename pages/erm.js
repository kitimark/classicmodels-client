import React from 'react'
import Prototype from '../components/prototype'
import {  useApolloClient, useQuery, useMutation } from '@apollo/react-hooks'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_EMPLOYEES = gql`
      query{
        employees{
          _id
          firstName
          lastName
          extension
          email
          officeCode
          reportsTo
          jobTitle
        }

      }
`
const REMOVE_EMLOYEES = gql`
  mutation Removeemployee($id: String!){
    removeEmployee(id: $id){
      _id
    }
  }
`

const Tablebody = () => {
  const { query ,mutate } = useApolloClient()
  return(
    <div className="columns">
      <div className="column">
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th><abbr title="Firstname">Firstname</abbr></th>
            <th><abbr title="Lastname">Lname</abbr></th>
            <th><abbr title="job title">Jobtitle</abbr></th>
            <th><abbr title="Email">Email</abbr></th>
            <th><abbr title="Office Code">Office</abbr></th>
            <th><abbr title="Extension">Extension</abbr></th>
            <th><abbr title="Report">Report</abbr></th>
            <th><abbr title="edit">edit</abbr></th>
          </tr>
        </thead>

        <Query query={GET_EMPLOYEES}>
          {({loading, error, data}) => {
            if (loading) return <p>loading...</p>
            console.log(error)
            if (error) return <p>error</p>
            return data.employees.map(employee => {
              return (
                <tbody>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.jobTitle}</td>
                  <td>{employee.email}</td>
                  <td>{employee.officeCode}</td>
                  <td>{employee.extension}</td>
                  <td>{employee.reportsTo}</td>
                  <td>
                  <button className="button is-info" onClick={async () => {
                    await mutate({
                      mutation: REMOVE_EMLOYEES, 
                      variables: { id: employee._id }
                    })
                    {window.location.reload();}
                  }}
                  >Remove</button>
                  </td>
                </tbody>
              )
            })
         }}
        </Query>
      </table>
      </div>

    </div>
  )}


const erm = () => (
<Prototype title="EMPLOYEE RESOUCE MANAGEMENT">

  <Tablebody />

</Prototype>

)



export default erm