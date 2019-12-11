import ApolloClient from 'apollo-boost'
import fetch from 'node-fetch'

const baseUrl = 'http://localhost:8001'

const client = new ApolloClient({
  uri: `https://classicmodels-api.herokuapp.com/`,
  fetchOptions: {
    credentials: 'include'
  },
  fetch
})

export { baseUrl, client }