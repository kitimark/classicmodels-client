import React from 'react'

const Field = ({ title, type }) => (
  <div className="field">
    <label for="" className="label">{title}</label>
    <div className="control">
      <input type={type} placeholder={title} className="input" required />
    </div>
  </div>
)

export default Field