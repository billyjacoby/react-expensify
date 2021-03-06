import {createStore} from 'redux';

// Action generators

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({
  type: 'RESET',
});

const setCount = ({count}) => ({
type: 'SET',
count,
});

// Reducers
// 1. Reducers are pur funnctions (output is only determined by input)
// 2. Never change state or action

const countReducer = (state = { count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
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
}

// sets the state, if no current state the default is used.
const store = createStore(countReducer);

// getState returns the current state
// console.log(store.getState());

// subscribe runs every time the state is changed on the store objects

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 101}));
