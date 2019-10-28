import React from 'react'
import Prototype from '../components/prototype'

const Search = () => (

  <div className="field has-addons ">
    <div className="control is-expanded">
      <input className="input"  type="text" placeholder="Enter Id,Name,..."/>
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
            <th style={{backgroundColor:'#99FFFF'}}><abbr title="Number">Number</abbr></th>
            <th style={{backgroundColor:'#FF99CC'}}><abbr title="Firstname">Fname</abbr></th>
            <th style={{backgroundColor:'#99FFFF'}}><abbr title="Lastname">Lname</abbr></th>
            <th style={{backgroundColor:'#FF99CC'}}><abbr title="Phone">Phone</abbr></th>
            <th style={{backgroundColor:'#99FFFF'}}><abbr title="City">City</abbr></th>
            <th style={{backgroundColor:'#FF99CC'}}><abbr title="State">State</abbr></th>
            <th style={{backgroundColor:'#99FFFF'}}><abbr title="Country">Country</abbr></th>
            <th style={{backgroundColor:'#FF99CC'}}><abbr title="Salereport">Salereport</abbr></th>
            <th style={{backgroundColor:'#99FFFF'}}><abbr title="Credit">Credit</abbr></th>
          </tr>
        </thead>

        <tbody style={{backgroundColor:'gray'}}>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
          <th>9</th>

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
          <th>9</th>
        </tbody>
        <tbody style={{backgroundColor:'gray'}}>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
          <th>9</th>

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
          <th>9</th>

        </tbody>
      </table>
      </div>

    </div>
   
  </>
)


const Member = () => (
<Prototype title="MEMBER">
  <Tablebody/>
</Prototype>
)

export default Member