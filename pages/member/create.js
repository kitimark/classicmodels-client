import React from 'react'
import Prototype from '../../components/prototype'


const Form = () => (
  <>
   
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">NAME</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input class="input" type="text" placeholder="Firstname" />
        </div>
        <div class="field">
          <input class="input" type="text" placeholder="Lastname" />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">COMPANY</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input class="input" type="text" placeholder="Company Name" />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">PHONE</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input class="input" type="text" placeholder="Phone Number" />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">ADDRESS</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input class="input" type="text" placeholder="Apartment/Room number, Street name" />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">ADDRESS 2</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input class="input" type="text" placeholder="Apartment, studio, or floor" />
        </div>
      </div>
    </div>

    
    <div class="field is-horizontal ">
      <div class="field-label is-normal" style={{marginLeft:"98px"}}>
        <label class="label">CITY</label>
      </div>
      <div class="field-body">
        <div class="field" style={{marginRight:"71px"}}>
          <input class="input" type="text" style={{width: 325}} />
        </div>
      </div>
      <div class="field-label is-normal">
        <label class="label">STATE</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input class="input" type="text" style={{width: 325}} />
        </div>
      </div>
    </div>


    
    <div class="field is-horizontal">
      <div class="field-label is-normal" style={{marginLeft:"102px"}}>
        <label class="label">POSTAL CODE</label>
      </div>
      <div class="field-body">
        <div class="field" style={{marginRight:"59px"}}>
          <input class="input" type="text" style={{width: 325}} />
        </div>
      </div>
      <div class="field-label is-normal">
        <label class="label">COUNTRY</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input class="input" type="text" style={{width: 325}} />
        </div>
      </div>
    </div>
     

   
    <div class="field is-grouped is-grouped-centered">
      <p class="control">
        <a class="button is-link" >CREATE</a>
      </p>
      <p class="control">
        <a class="button is-light">CANCEL</a>
      </p>
    </div>
    

    
  </>

)

const CreateMember = () => (
  <Prototype title="CREATE MEMBER">
    <Form />
  </Prototype>
)


export default CreateMember
