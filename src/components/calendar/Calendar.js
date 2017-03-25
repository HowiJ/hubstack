// React
import React, { Component } from 'react';
// Moment
import moment from 'moment';
// Bootstrap
import { Row, Col, Table, Glyphicon } from 'react-bootstrap';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { monthView } from '../../actions/index';

// Each Day
import Day from './components/day/Day';

// TODO: repeats
function filterTasksForDay(task, day) {
  // If the date from is same as the day
  if (moment(task.date_from).format('DD MMMM YYYY') === day.format('DD MMMM YYYY')) {
    return true;
  }
  // If day is between datefrom and dateto
  // If day is x and repeat[x] is true. IE: Monday: repeat['mon'] === true
  // If repeat.monthly === true && dates match
  // If repeat.yearly === true && months match && the dates match
  return false
}
// Each Week has 7 days
const Week = (props) => {
  const year = props.current.year();
  const month = props.current.month();

  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(new moment().year(year).month(month).week(props.week).day(i));
  }
  return (
    <tr>
      {days.map(val => { return <Day day={val} month={props.month} key={val} tasks={props.tasks.filter( task => { return filterTasksForDay(task, val); } )}></Day> })}
    </tr>
  )
}

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today:    moment(),
      current:  props.month,
      weeks:    [],
    }
  }
  changeMonth (change) {
    // Current as an easy way to access it
    // const curr = this.state.current;
    // Variables to be set to
    let year  = this.state.current.year();
    let month = this.state.current.month();
    // Need to decrease year if under 0
    if (this.state.current.month()+change < 0) {
      year--;
      month = 11;
    } else if (this.state.current.month()+change > 11) {
      year++;
      month = 0;
    } else {
      month += change;
    }

    this.props.monthView(moment().year(year).month(month));
    this.componentDidMount()
    this.setState({current: moment().year(year).month(month)}, () => { this.componentDidMount() });
  }

  componentDidMount() {
    let year  = this.state.current.year();
    let month = this.state.current.month();

    const w = moment().year(year).month(month).date(1).week();
    const arr = [];
    const max = this.state.current.date(1).day() < 5?5:6;
    for (let i = 0; i < max; i++) {
      arr.push(w+i);
    }
    this.setState({ weeks: arr });
  }
  render () {
    return (
      <div className="Calendar">
        <Row className="month">
          <Col md={ 1 } className="middle">
            <h3 onClick={() => { this.changeMonth(-1); }} className="btn btn-lg">
              <Glyphicon glyph="chevron-left"></Glyphicon>
            </h3>
          </Col>
          <Col md={ 10 } className="middle">
            <h3>{moment(this.state.current).format('MMMM YYYY')}</h3>
          </Col>
          <Col md={ 1 } className="middle">
            <h3 onClick={() => { this.changeMonth(1); }} className="btn btn-lg">
              <Glyphicon glyph="chevron-right"></Glyphicon>
            </h3>
          </Col>
        </Row>
        <Row>
          <Col md={ 12 } className="days">
            <Row className="middle">
              <Table>
                <tbody>
                  <tr>
                    <td>Sunday</td>
                    <td>Monday</td>
                    <td>Tuesday</td>
                    <td>Wednesday</td>
                    <td>Thursday</td>
                    <td>Friday</td>
                    <td>Saturday</td>
                  </tr>
                  {this.state.weeks.map(val=> {
                    return <Week week={val} key={val} current={this.state.current} month={this.state.current.month()} tasks={this.props.tasks}></Week>
                  })}
                </tbody>
              </Table>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps({ month, tasks }) {
  return { month, tasks };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ monthView }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);