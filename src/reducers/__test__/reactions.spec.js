import reactions from './../reactions.jsx'

describe('reactions reducer', () => {
  it('should handle initial state', () => {
    expect(
      reactions(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_NEW_REACTION', () => {
    expect(
      reactions([], {
        type: 'ADD_NEW_REACTION',
        description: 'Run the tests',
        severity: 1,
        id: 0
      })
    ).toEqual([
      {
        description: 'Run the tests',
        severity: 1,
        id: 0
      }
    ])

    expect(
      reactions([
        {
          description: 'Run the tests',
          severity: 1,
          id: 0
        }
      ], {
        type: 'ADD_NEW_REACTION',
        description: 'Use Redux',
        severity:2,
        id: 1
      })
    ).toEqual([
      {
        description: 'Run the tests',
        severity:1,
        id: 0
      }, {
        description: 'Use Redux',
        severity: 2,
        id: 1
      }
    ])

    expect(
      reactions([
        {
          description: 'Run the tests',
          severity:1,
          id: 0
        }, {
          description: 'Use Redux',
          severity:2,
          id: 1
        }
      ], {
        type: 'ADD_NEW_REACTION',
        description: 'Fix the tests',
        severity:3,
        id: 2
      })
    ).toEqual([
      {
        description: 'Run the tests',
        severity: 1,
        id: 0
      }, {
        description: 'Use Redux',
        severity: 2,
        id: 1
      }, {
        description: 'Fix the tests',
        severity:3,
        id: 2
      }
    ])
  })
})