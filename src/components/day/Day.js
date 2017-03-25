import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { taskShow } from '../../actions/index';
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
        <Row>
          <Col md={12}>{task.title}</Col>
        </Row>
        <Row>
          <Col md={12}>{task.location}</Col>
        </Row>
        <Row>
          <Col md={6}>{task.date_from.format('MMMM Do, YYYY at h:mm')}</Col>
          <Col md={6}>{task.date_to.format('MMMM Do, YYYY at h:mm')}</Col>
        </Row>
        <Row>
          <Col md={12}>{task.notes}</Col>
        </Row>
      </div>
    );
  }
  wtfTest() {
    return [
      <div>Hi</div>, <div>Hello</div>
    ]
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