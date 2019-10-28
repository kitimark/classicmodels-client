import react from 'react'
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
      <table className="table is-fullwidth is-bordered">
        <thead>
          <tr>
            <th><abbr title="Number">Product Code</abbr></th>
            <th><abbr title="job title">Product Name</abbr></th>
            <th><abbr title="Firstname">Number</abbr></th>
            <th><abbr title="Lastname">Price</abbr></th>
          </tr>
        </thead>

        <tbody>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
        </tbody>
        <tbody>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>   
        </tbody>
      </table>
      </div>

    </div>
   
  </>
)



const Catalog = () => (
<Prototype>
  <Tablebody/>
</Prototype>
)


export default Catalog