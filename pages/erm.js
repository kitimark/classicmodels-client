import React from 'react'
import Field from '../components/field'
import Prototype from '../components/prototype'


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
            <th><abbr title="Number">Number</abbr></th>
            <th><abbr title="job title">Jobtitle</abbr></th>
            <th><abbr title="Firstname">Fname</abbr></th>
            <th><abbr title="Lastname">Lname</abbr></th>
            <th><abbr title="Email">Email</abbr></th>
            <th><abbr title="Office Code">Office</abbr></th>
            <th><abbr title="Extension">Extension</abbr></th>
            <th><abbr title="Reports">Reports</abbr></th>
          </tr>
        </thead>

        <tbody>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>

        </tbody>
        <tbody>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
        </tbody>
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