import React from 'react'
import Prototype from '../components/prototype'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

const GET_EMPLOYEES = gql`
      query{
        employees{
          firstName
          lastName
          extension
          email
          officeCode
          reportTo
          jobTitle
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
                  <td>{employee.reportTo}</td>
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


const erm = () => (
<Prototype title="EMPLOYEE RESOUCE MANAGEMENT">

  <Tablebody />

</Prototype>

)



export default erm