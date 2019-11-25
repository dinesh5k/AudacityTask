import * as actions from './../index'

describe('test actions', () => {
  it('add new reaction should create ADD_NEW_REACTION action', () => {
    expect(actions.addReaction('Use Redux')).toEqual({
      type: 'ADD_NEW_REACTION',
      id: 5,
      description: 'Use Redux',
      observationDate: undefined,
      severity: NaN,
    })
  })
})