import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/App';
import { authReducer } from './reducers/authReducer';

const el = document.getElementById('root');
const root = createRoot(el);
const composeEnhancers = {
  features: {
    pause: true, // start/pause recording of dispatched actions
    lock: true, // lock/unlock dispatching actions and side effects
    persist: false, // persist states on page reloading
    export: false, // export history of actions in a file
    import: 'custom', // import history of actions from a file

    // fairly certrain jump and skip is broken, if I set both to false then neither show on hover, if I set Jump to true, it still doesnt show either them,
    // if I set skip to true and jump to false, it shows both of them on hover

    jump: false, // jump back and forth (time travelling)
    skip: false, // skip (cancel) actions

    reorder: true, // drag and drop actions in the history list
    dispatch: true, // dispatch custom actions or action creators
    test: false // generate tests for the selected actions
  }
};

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducers, composeEnhancers(applyMiddleware));

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  composeEnhancers: composeEnhancers
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
