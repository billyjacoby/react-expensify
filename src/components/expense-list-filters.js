import React from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';

class ExpenseListFilters  extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      calendarFocused: null
    }
  }

  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  render () {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {this.props.dispatch(setTextFilter(e.target.value));}}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {e.target.value === "date" ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount());}}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          // onDatesChange={({ startDate, endDate }) => this.onDatesChange({startDate, endDate})}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={(focusedInput) => this.setState({calendarFocused: focusedInput})}
        />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

export default connect(mapStateToProps)(ExpenseListFilters);
