import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  // the key "form" is mandatory and it should be as is when using the redux form package.
  form: formReducer,
  streams: streamReducer
});
