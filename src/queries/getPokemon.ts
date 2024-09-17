import gql from 'graphql-tag'

export const GET_POKEMON = gql`
  query GetPokemon($pokemonKey: PokemonEnum!) {
    getPokemon(pokemon: $pokemonKey) {
      sprite
      species
      key
      types {
        name
        matchup {
          attacking {
            doubleEffectiveTypes
            doubleResistedTypes
            effectiveTypes
            effectlessTypes
            normalTypes
            resistedTypes
          }
          defending {
            doubleEffectiveTypes
            doubleResistedTypes
            effectiveTypes
            effectlessTypes
            normalTypes
            resistedTypes
          }
        }
      }
      evYields {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      flavorTexts {
        game
        flavor
      }
    }
  }
`
