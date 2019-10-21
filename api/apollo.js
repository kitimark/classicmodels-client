import ApolloClient from 'apollo-boost'
import fetch from 'node-fetch'

const baseUrl = 'http://localhost:8001'

const client = new ApolloClient({
  uri: `${baseUrl}/graphql`,
  fetch
})

export { baseUrl, client }