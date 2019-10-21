import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import Field from '../components/field'

const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    loginAccountControllerLogin(accountsLoginInput: {
      username: $username,
      password: $password
    }) {
      token
    }
  }
`

const Login = () => {
  const [login, {loading, data}] = useMutation(LOGIN)
  const [username, setUsername ] = useState('')
  const [password, setPassword ] = useState('')

  if (loading) return <p>Loading ...</p>;

  if (data) {
    const {token} = data.loginAccountControllerLogin
    return <p>token: {token}</p>
  }

  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <div className="box">
                <Field 
                  title="Username" 
                  type="username" 
                  onChange={(value) => {
                    setUsername(value)
                  }} 
                />
                <Field 
                  title="Password" 
                  type="password" 
                  onChange={(value) => {
                    setPassword(value)
                  }}
                />
                <div className="field">
                  <button 
                    onClick={() => {
                      login({variables: {
                        username,
                        password
                      }})
                    }} 
                    className="button is-success"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login