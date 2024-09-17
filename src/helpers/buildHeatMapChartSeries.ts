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
                  x: type,
                  y: 100
                }
              })
              matchupsAcc.push(normalMatchups)
            }
            if (matchupsCurrent.resistedTypes) {
              const resistedMatchups = matchupsCurrent.resistedTypes.map((type) => {
                return {
                  x: type,
                  y: 50
                }
              })
              matchupsAcc.push(resistedMatchups)
            }
            if (matchupsCurrent.effectiveTypes) {
              const effectiveMatchups = matchupsCurrent.effectiveTypes.map((type) => {
                return {
                  x: type,
                  y: 200
                }
              })
              matchupsAcc.push(effectiveMatchups)
            }
            if (matchupsCurrent.effectlessTypes) {
              const effectlessMatchups = matchupsCurrent.effectlessTypes.map((type) => {
                return {
                  x: type,
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
