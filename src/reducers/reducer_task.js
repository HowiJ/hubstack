import { TASK_CREATE, TASK_SHOW } from '../actions/index';
import moment from 'moment';

const tasks = [
  {
    title: 'Birthday Party',
    notes: `Sam's birthday party! Call Jeff if you need. (408) 555-1234`,
    location: `Sam's House`,
    date_from: moment('2017-03-26T07:00:00.000'),
    date_to: moment('2017-03-26T19:00:00.000'),
  },
  {
    title: 'Movie Time :]',
    notes: `Movie with Lena: Logan`,
    location: `AMC Mercado`,
    date_from: moment('2017-03-19T19:00:00.000'),
    date_to: moment('2017-03-019T20:00:00.000'),
  },
  {
    title: 'The Circle Interview',
    notes: `They WILL be watching you probably.`,
    location: `The Circle`,
    date_from: moment('2017-03-20T14:00:00.000'),
    date_to: moment('2017-03-20T16:00:00.000'),
  },
]
function find (day, haystack) {
  haystack.filter(task => {
    if ((day.isAfter(task.date_from.format('YYYY-MM-DD')) && day.isBefore(task.date_to.format('YYYY-MM-DD'))) || day.isSame(task.date_from.format('YYYY-MM-DD'))) {
      return true;
    }
    else return false;
  })
}

export default function (state = [], action) {
  switch(action.type) {
    case TASK_SHOW:
      console.log(find(action.payload, tasks))
      return find(action.payload, tasks);
    default:
      return state;
  }
}