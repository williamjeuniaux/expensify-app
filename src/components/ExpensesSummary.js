import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  return (
    <div>
    <p>Viewing {props.expenseCount}
      {props.expenseCount > 1 ? ' expenses ' : ' expense '}
      totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}
    </p>
  </div>
)
}
const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: expenses.length,
    expensesTotal: selectExpensesTotal(expenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary);