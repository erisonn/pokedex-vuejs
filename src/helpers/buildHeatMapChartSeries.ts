import { capitalizeFirstLetter } from './capitalizeFirstLetter'

export interface TypeMatchups {
  name: string
  matchup: {
    [key: string]: {
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

const getMatchupEffectivenessValueFromText = (text: string) => {
  switch (text) {
    case 'resistedTypes':
      return 0.5

    case 'effectiveTypes':
      return 2

    case 'effectlessTypes':
      return 0

    default:
      return 1
  }
}

const buildFormatedMatchupsToSeries = (
  formatedMatchups: {
    [x: string]: string[]
  }[]
) => {
  const series = formatedMatchups
    .reduce(
      (matchupsAcc, matchupsCurrent) => {
        const { __typename, ...current } = matchupsCurrent
        for (const matchup in current) {
          const formatedMatchup = current[matchup].map((type) => {
            return {
              x: 'v/s ' + capitalizeFirstLetter(type),
              y: getMatchupEffectivenessValueFromText(matchup)
            }
          })
          matchupsAcc.push(formatedMatchup)
        }
        return matchupsAcc
      },
      [] as FormatedTypeMatchups['data'][]
    )
    .flat(1)
  return series
}

export const buildHeatMapChartSeries = (typeMatchups: TypeMatchups[], key: string) => {
  const formatedChartData = typeMatchups.reduce((acc, current) => {
    const formatedMatchups = Object.keys(current.matchup[key]).map((matchups) => {
      return {
        [matchups]: current.matchup[key][matchups]
      }
    })

    const type = {
      name: current.name,
      data: buildFormatedMatchupsToSeries(formatedMatchups)
    }
    acc.push(type)
    return acc
  }, [] as FormatedTypeMatchups[])
  return formatedChartData
}
