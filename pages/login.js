import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Field from '../components/field'
import Router from "next/router";
const LOGIN = gql`
  mutation Login($credentials: Credentials!){
    login(credentials: $credentials){
      firstName
      lastName
    }
  }
`


const Login = () => {
  const [login, {loading, error, data}] = useMutation(LOGIN)
  const [username, setUsername ] = useState('')
  const [password, setPassword ] = useState('')

  if (loading) return <p>Loading ...</p>;

  if (data) {
    const {token} = data.login
    return (Router.push("/../catalog"))
  }

  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <div className="box" >
                {error ? "error": ''}
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
                        credentials: {
                          email: username,
                          password
                        }
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