import { CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS } from '../actions/types';
import _ from 'loadash';

export const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      // TODO: Fetch the list of streams
      return state;
    default:
      return state;
  }
};
