import React from 'react'
import Field from '../components/field'

const Login = () => (
  <section className="hero is-primary is-fullheight">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" className="box">
              <Field title="Username" type="username" />
              <Field title="Password" type="password" />
              <div className="field">
                <button className="button is-success">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Login