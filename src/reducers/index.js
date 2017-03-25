import { combineReducers } from 'redux';
import DayReducer from './reducer_day';
import MonthReducer from './reducer_month';
import TaskReducer from './reducer_tasks';

const rootReducer = combineReducers({
  day: DayReducer,
  month: MonthReducer,
  tasks: TaskReducer,
})

export default rootReducer;