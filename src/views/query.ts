import gql from 'graphql-tag'

export const GET_POKEMONS_QUERY = gql`
  query GetAllPokemon($take: Int = 500, $offset: Int = 89) {
    getAllPokemon(take: $take, offset: $offset) {
      sprite
      species
      key
      types {
        name
      }
    }
  }
`
