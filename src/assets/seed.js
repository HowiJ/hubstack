import moment from 'moment';
const tasks = [
  {
    title: 'Birthday Party',
    notes: `Sam's birthday party! Call Jeff if you need. (408) 555-1234`,
    location: `Sam's House`,
    date_from: moment('2017-03-26').hour(7),
    date_to: moment('2017-03-26').hour(19),
  },
  {
    title: 'Movie Time :]',
    notes: `Movie with Lena: Logan`,
    location: `AMC Mercado`,
    date_from: moment('2017-03-19').hour(19),
    date_to: moment('2017-03-19').hour(22),
  },
  {
    title: 'The Circle Interview',
    notes: `They WILL be watching you probably.`,
    location: `The Circle`,
    date_from: moment('2017-03-24').hour(14),
    date_to: moment('2017-03-24').hour(17),
  },
]

const taskManager = {
  index: () => tasks,
  find: day => {
    return tasks.filter(task => {
      if (day.format('YYYY-MM-DD') === task.date_from.format('YYYY-MM-DD')) {
        return true;
      }
      return false;
    })
  }
}


export default taskManager;
