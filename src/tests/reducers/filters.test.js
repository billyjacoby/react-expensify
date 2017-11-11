import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sort by to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sort by to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set the text filter', () => {
  const text = 'string';
  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text});
  expect(state).toEqual({
    text,
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set the start date filter', () => {
  const startDate = moment().subtract(2, 'days')
  const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate,
    endDate: moment().endOf('month')
  });
});

test('should set the end date filter', () => {
  const endDate = moment().subtract(2, 'days');
  const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate
  });
});
