import Router from 'next/router'
import { useApolloClient } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const GET_ME = gql`
query {
  me {
    _id
  } 
}
`

export const auth = async ctx => {
  const { query } = useApolloClient()
  const data = await query({query: GET_ME})
  console.log(data)
  if (!data) {
    Router.push('/login')
  }
}