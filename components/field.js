import React from 'react'

class Field extends React.Component {
  onInputChange(event) {
    if (this.props.onChange)
      this.props.onChange(event.target.value)
  }

  render() {
    const { title, type } = this.props
    return (
      <div className="field">
        <label for="" className="label">{title}</label>
        <div className="control">
          <input 
            type={type} 
            placeholder={title} 
            className="input" 
            onChange={this.onInputChange.bind(this)} 
            required 
          />
        </div>
      </div>
    )
  }
}

export default Field