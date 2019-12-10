import React, { useState } from 'react'

export const Dropdown = ({ children, title, placeholder }) => {
  const [isClick, setClick] = useState(false)

  return (
    
        <div
          className={"dropdown" + (isClick ? ' is-active' : null)}
          onClick={() => {
            setClick(!isClick)
          }}
        >
          <div className="dropdown-trigger">
            <button className="button">
              {placeholder || title}
            </button>
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-content">
              {children}
            </div>
          </div>
        </div>
    
  )
}

export const DropdonwMenu = ({ list, onClick }) => {
  return list.map(value => (
    <a
      className="dropdown-item"
      onClick={() => {
        onClick(value)
      }}
    >
      <p>{value}</p>
    </a>
  ))
}