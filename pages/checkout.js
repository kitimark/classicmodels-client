import react from 'react'
import Prototype from '../components/prototype'



const Textbar = ({ name, class1, type, place, butt }) => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">{name}</label>
    </div>
    <div className="field-body">
      <div className="field">
        <p className="control">
          <input className={class1} type={type} placeholder={place} />
        </p>
      </div>
    </div>

    <div className="control">
      <a className="button is-info">
        {butt}
      </a>
    </div>
  </div>

)

const Textbar2 = ({ name, class1, type, place }) => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">{name}</label>
    </div>
    <div className="field-body">
      <div className="field">
        <p className="control">
          <input className={class1} type={type} placeholder={place} />
        </p>
      </div>
    </div>
  </div>

)



const Table = () => (
  <>


    <div className="columns">
      <div className="column">
        <table className="table ">
          <thead>
            <tr>
              <th><abbr title="Product stock">Product stock</abbr></th>
              <th><abbr title="">2</abbr></th>
              <th><abbr title="">3</abbr></th>

            </tr>
          </thead>
          <tbody>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tbody>
          <tbody>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tbody>
        </table>
      </div>

    </div>

  </>
)



const Checkout = () => (
<Prototype title="CHECKOUT">
 <>

    <Textbar name="Customer" class1="input" type="text" palce="" butt=" Search"></Textbar>
    <Textbar name="Product" class1="input" type="text" palce="" butt=" Search"></Textbar>

    <div className="columns">
      <div className="column"></div>
      <div className="column"><Table /></div>
      <div className="column"></div>
      <div className="column"></div>
    </div>

    <Textbar2 name="Price" class1="output" type="text" palce=""></Textbar2>
    <Textbar2 name="Promocode" class1="input" type="text" palce=""></Textbar2>
    <Textbar2 name="Point" class1="output" type="text" palce=""></Textbar2>

    <div className="field is-grouped is-grouped-right">
      <div className="control">
        <button className="button is-success is-rounded">Checkout</button>
      </div>
    </div>

  </>
  </Prototype>
)


export default Checkout