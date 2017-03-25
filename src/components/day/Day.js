import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link, Glyphicon } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { taskShow } from '../../actions/index';
import moment from 'moment';
import tasks from '../../assets/seed';

class DayView extends Component{
  constructor( props ) {
    super(props);

    this.state = { tasks: [] }
  }
  // TODO: Needs to API call to grab all tasks of that day
  componentDidMount() {
    this.setState({tasks: tasks.find(this.props.day)});
  }
  taskToElement(task) {
    return ( 
      <div key={task.title}>
        <hr/>
        <Row>
          <Col md={12}><h1>{task.title}</h1></Col>
        </Row>
        <Row>
          <Col md={2}>
            <strong>Location: </strong>
          </Col>
          <Col md={10}>
            {task.location}
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <strong>Date From:</strong>
          </Col>
          <Col md={10}>
            {moment(task.date_from).format('MMMM Do, YYYY at h:mm')}
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <strong>Date To:</strong>
          </Col>
          <Col md={10}>
            {moment(task.date_to).format('MMMM Do, YYYY at h:mm')}
          </Col>
        </Row>
        <Row>
          <Col md={12}><h3>Notes</h3></Col>
        </Row>
        <Row>
          <Col md={12}>{task.notes}</Col>
        </Row>
      </div>
    );
  }
  render () {
    return (
      <div className="DayView">
        <Grid>
          <Row>
            <Col md={ 12 } className="middle">
              <h1>
                {this.props.day.format('DD MMMM, YYYY')}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={ 12 }>
              { this.state.tasks.length===0 && <h3>No Events/Tasks Today</h3> }
              { this.state.tasks.map(this.taskToElement) }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps ({ day, task }) {
  return { day, task };
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ taskShow }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DayView);