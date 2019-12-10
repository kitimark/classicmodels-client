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
          <input class="input" type="text" placeholder="Your address" />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">City</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input class="input" type="text" placeholder="..." />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">State</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input class="input" type="text" placeholder="..." />
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Portal Code</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input class="input" type="text" placeholder="..." />
        </div>
      </div>
    </div>
      
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Country</label>
      </div>
      <div class="field-body">
        <div class="field">
          <input class="input" type="text" placeholder="..." />
        </div>
      </div>
    </div>

    <div class="field is-grouped is-grouped-centered">
      <p class="control">
        <a class="button is-primary">CREATE</a>
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
