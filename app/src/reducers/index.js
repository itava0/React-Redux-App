import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';
const initialState ={
  characters: [],
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case START_FETCHING:
    return {
      ...state,
      isFetching: true,
      error: ''
    }
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        characters: action.payload
      }
      case FETCH_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        }
    default:
      return state;
  }
}