import {createStore} from 'redux';

// sets the state, if no current state the default is used.
const store = createStore((state = { count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state;
  }
});

// getState returns the current state
// console.log(store.getState());

// subscribe runs every time the state is changed on the store objects

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions are objects that get sent to the store
// eg increment, decrement, reset
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
} );

store.dispatch({
  type: 'INCREMENT',
} );

store.dispatch({
  type: 'RESET',
} );

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
} );

store.dispatch({
  type: "SET",
  count: 101
})
