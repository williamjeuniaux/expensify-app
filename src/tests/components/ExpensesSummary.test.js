import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary}w from '../../components/ExpensesSummary';

test('should summarize 1 expense properly', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={94.34}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should summarize 2 expenses properly',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expenseTotal={150.34}/>);
    expect(wrapper).toMatchSnapshot();
})