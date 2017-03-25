import { MONTH_VIEW } from '../actions/index';
import moment from 'moment';

export default function (state = moment(), action) {
  switch(action.type) {
    case MONTH_VIEW:
      return action.payload;
    default:
      return state;
  }
}