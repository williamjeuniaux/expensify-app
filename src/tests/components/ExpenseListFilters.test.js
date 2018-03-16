import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />);
})

test('should render ExpsenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpsenseListFilters with altFilters correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
})

// should handle text change
test('should handle text change', () => {
    const text = "new text";
    wrapper.find('input').simulate('change', {
        target: { value: text }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(text);
})


// should sort by date
test('should sort by date', () => {
    const sortBy = 'date';
    wrapper.find('select').simulate('change', {
        target: { value: sortBy }
    });
    expect(sortByDate).toHaveBeenCalled();
})

// should sort by amount
test('should sort by amount', () => {
    const sortBy = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value: sortBy }
    });
    expect(sortByAmount).toHaveBeenCalled();
})

// should handle date changes
test('should handle date changes', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: altFilters.startDate,
        endDate: altFilters.endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
})

// should handle date focus changes
test('should handle date focus changes', () => {
    const focus = 'startDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(focus);
    expect(wrapper.state('calendarFocused')).toBe(focus);
})
