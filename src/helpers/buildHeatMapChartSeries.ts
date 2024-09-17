import { capitalizeFirstLetter } from './capitalizeFirstLetter'

export interface TypeMatchups {
  name: string
  matchup: {
    attacking: {
      [key: string]: string[]
    }
    defending: {
      [key: string]: string[]
    }
  }
}

export interface FormatedTypeMatchups {
  name: string
  data: {
    x: string
    y: number
  }[]
}

// TODO: SPLIT THIS FUNCTION INTO SMALL FUNCTIONS
export const buildHeatMapChartSeries = (typeMatchups: TypeMatchups[]) => {
  const formatedChartData = typeMatchups.reduce((acc, current) => {
    const formatedMatchups = Object.keys(current.matchup.attacking).map((matchups) => {
      return {
        [matchups]: current.matchup.attacking[matchups]
      }
    })

    const type = {
      name: current.name,
      data: formatedMatchups
        .reduce(
          (matchupsAcc, matchupsCurrent) => {
            if (matchupsCurrent.normalTypes) {
              const normalMatchups = matchupsCurrent.normalTypes.map((type) => {
                return {
                  x: current.name + ' → ' + capitalizeFirstLetter(type),
                  y: 1
                }
              })
              matchupsAcc.push(normalMatchups)
            }
            if (matchupsCurrent.resistedTypes) {
              const resistedMatchups = matchupsCurrent.resistedTypes.map((type) => {
                return {
                  x: current.name + ' → ' + capitalizeFirstLetter(type),
                  y: 0.5
                }
              })
              matchupsAcc.push(resistedMatchups)
            }
            if (matchupsCurrent.effectiveTypes) {
              const effectiveMatchups = matchupsCurrent.effectiveTypes.map((type) => {
                return {
                  x: current.name + ' → ' + capitalizeFirstLetter(type),
                  y: 2
                }
              })
              matchupsAcc.push(effectiveMatchups)
            }
            if (matchupsCurrent.effectlessTypes) {
              const effectlessMatchups = matchupsCurrent.effectlessTypes.map((type) => {
                return {
                  x: current.name + ' → ' + capitalizeFirstLetter(type),
                  y: 0
                }
              })
              matchupsAcc.push(effectlessMatchups)
            }
            return matchupsAcc
          },
          [] as FormatedTypeMatchups['data'][]
        )
        .flat(1)
    }
    acc.push(type)
    return acc
  }, [] as FormatedTypeMatchups[])
  return formatedChartData
}
