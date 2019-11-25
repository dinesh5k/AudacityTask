let initialState = []
const reactions = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_REACTION':
      return [
          ...state,
          {
            id: action.id,
            description:action.description,
            observationDate: action.observationDate,
            severity: action.severity
          }
        ]
    
  case 'ERROR_CASE':
      return state;

  default:
      return state;
  }


}
export default reactions