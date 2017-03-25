import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dayView } from '../../../../actions/index';
import moment from 'moment';

class Day extends Component {
  constructor(props) {
    super (props);

    this.state = { 
      day:      props.day,
      weekend:  false,
      notCurrentMonth: false,
      today:    false,
      direct:   false
    }

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (this.props.day.day() === 0 || this.props.day.day() === 6) {
      this.setState({ weekend: true });
    }
    if (this.props.day.month() !== this.props.month) {
      this.setState({ notCurrentMonth: true });
    }
    if (this.props.day.format() === moment().format()) {
      this.setState({ today: true });
    }
    
  }
  handleClick () {
    this.props.dayView(this.props.day);
    this.setState({direct: true});
  }
  mapTasksToElement(event) {
    return <p key={event.title} className="calendar_event_title">{event.title}</p>;
  }
  render() {
    return (
      <td 
        className={`Day ${this.state.weekend&&this.state.notCurrentMonth?'otherWeekend':this.state.weekend?'weekend':this.state.notCurrentMonth?'otherMonth':''} ${this.state.today?'today':''}`} 
        style={{height: '10em'}}
        onClick={ this.handleClick }>
        <Row>
          <Col md={12}>
            <h4>
              {this.props.day.date()}
            </h4>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {this.props.tasks.map(this.mapTasksToElement)}
          </Col>
        </Row>

        {this.state.direct && <Redirect push to={{pathname: '/hubstack/calendar/day', state: {from: this.props.location}}} />}
      </td>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ dayView }, dispatch);
}

export default connect(null, mapDispatchToProps)(Day);