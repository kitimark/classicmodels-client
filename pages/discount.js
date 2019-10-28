import React from 'react'
import Prototype from '../components/prototype'


const Inputbar = ({text1 , placeholder1}) => (

  <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">{text1}</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder={placeholder1}/>
      </div>
    </div>
  </div>
</div>


)


const Discount = () => (
  <>
  <Prototype>
    <th>Add Promotion</th>
   
   <Inputbar text1="Promotion" placeholder1="Promotion.."/>
   <Inputbar text1="Start date" placeholder1="date.."/>
   <Inputbar text1="Expire date" placeholder1="Expire date.."/>
   <Inputbar text1="Drecreas" placeholder1="Decreas.."/>
 
   <div className="field is-grouped is-grouped-right">
  <div className="control">
    <button className="button is-success is-rounded">Submit</button>
  </div>
  </div>
</Prototype>
 </>
)


export default Discount