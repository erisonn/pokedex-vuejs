import gql from 'graphql-tag'

export const GET_POKEMONS_QUERY = gql`
  query GetAllPokemon($take: Int = 30, $offset: Int = 93) {
    getAllPokemon(take: $take, offset: $offset) {
      sprite
      species
      key
      num
      types {
        name
      }
    }
  }
`
