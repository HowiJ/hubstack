import moment from 'moment';
const tasks = [
  {
    title: 'Birthday Party',
    notes: `Sam's birthday party! Call Jeff if you need. (408) 555-1234`,
    location: `Sam's House`,
    repeat: {
      mon: false, tue: false, wed: false, thu: false, fri: false,
      monthly: false,
      yearly: false
    },
    date_from: moment('2017-03-26').hour(7).unix()*1000,
    date_to: moment('2017-03-26').hour(19).unix()*1000,
  },
  {
    title: 'Movie Time',
    notes: `Watching a movie today! Showtime is at 6:15pm, meeting at 6:00pm.`,
    location: `AMC Mercado`,
    repeat: {
      mon: false, tue: false, wed: false, thu: false, fri: false,
      monthly: false,
      yearly: false
    },
    date_from: moment('2017-03-19').hour(18).unix()*1000,
    date_to: moment('2017-03-19').hour(22).unix()*1000,
  },
  {
    title: 'Game Breakers Conference (GBC)',
    notes: `Not a real meeting...Just means home...beer...`,
    location: `Home`,
    repeat: {
      mon: false, tue: false, wed: false, thu: false, fri: false,
      monthly: false,
      yearly: false
    },
    date_from: moment('2017-03-24').hour(7).unix()*1000,
    date_to: moment('2017-03-24').hour(24).unix()*1000,
  },
  {
    title: 'Reunion Dinner',
    notes: `10 year reunion dinner with the dudes. Definitely drinks afterwards too.`,
    location: `Alexander's Steakhouse`,
    repeat: {
      mon: false, tue: false, wed: false, thu: false, fri: false,
      monthly: false,
      yearly: false
    },
    date_from: moment('2017-04-14').hour(18).unix()*1000,
    date_to: moment('2017-04-14').hour(24).unix()*1000,
  },
  {
    title: 'Pie Day Brunch',
    notes: `Pie day brunch with the family.`,
    location: `Original Pancake House`,
    repeat: {
      mon: false, tue: false, wed: false, thu: false, fri: false,
      monthly: false,
      yearly: false
    },
    date_from: moment('2017-03-14').hour(9).unix()*1000,
    date_to: moment('2017-03-14').hour(11).unix()*1000,
  },
  {
    title: 'Pie Day Dinner',
    notes: `Part II for Pie Day! Time to get even fatter!!`,
    location: `123 Sesame Street, San Francisco, CA`,
    repeat: {
      mon: false, tue: false, wed: false, thu: false, fri: false,
      monthly: false,
      yearly: false
    },
    date_from: moment('2017-03-14').hour(18).unix()*1000,
    date_to: moment('2017-03-14').hour(20).unix()*1000,
  },
  {
    title: 'Rock Climbing',
    notes: `Rock Climbing with the bros.`,
    location: `Planet Granite`,
    repeat: {
      mon: false, tue: false, wed: false, thu: false, fri: false,
      monthly: false,
      yearly: false
    },
    date_from: moment('2017-04-14').hour(10).unix()*1000,
    date_to: moment('2017-04-14').hour(14).unix()*1000,
  },
  {
    title: 'Jesse\'s birthday',
    notes: `Birthday dinner and fun with Jesse.`,
    location: `Fogo De Chao`,
    repeat: {
      mon: false, tue: false, wed: false, thu: false, fri: false,
      monthly: false,
      yearly: false
    },
    date_from: moment('2017-04-06').hour(0).unix()*1000,
    date_to: moment('2017-04-06').hour(23).unix()*1000,
  },
  {
    title: 'Christmas Party',
    notes: `Christmas party with all the people. All of them...`,
    location: `Home`,
    repeat: {
      mon: false, tue: false, wed: false, thu: false, fri: false,
      monthly: false,
      yearly: false
    },
    date_from: moment('2016-12-25').hour(0).unix()*1000,
    date_to: moment('2016-12-25').hour(23).unix()*1000,
  },
  {
    title: 'Valentines Day',
    notes: `AKA Single's Awareness Day. AKA Beer, and lots of it. AKA I should go...`,
    location: `Home`,
    repeat: {
      mon: false, tue: false, wed: false, thu: false, fri: false,
      monthly: false,
      yearly: false
    },
    date_from: moment('2017-02-14').hour(0).unix()*1000,
    date_to: moment('2017-02-14').hour(23).unix()*1000,
  },
  {
    title: 'New Years Party',
    notes: `Tis a new year, it'll be BYOB and also bring a food dish. Thinking of egg salad`,
    location: `Kevin's House`,
    repeat: {
      mon: false, tue: false, wed: false, thu: false, fri: false,
      monthly: false,
      yearly: false
    },
    date_from: moment('2017-01-01').hour(0).unix()*1000,
    date_to: moment('2017-01-01').hour(23).unix()*1000,
  },
]

const taskManager = {
  index: () => tasks,
  find: day => {
    return tasks.filter(task => {
      if (day.format('YYYY-MM-DD') === moment(task.date_from).format('YYYY-MM-DD')) {
        return true;
      }
      return false;
    })
  }
}


export default taskManager;
