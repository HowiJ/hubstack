// Dependencies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

// Components
import Calendar from './components/calendar/Calendar';
import DayView from './components/day/Day.js';
import Temp from './components/temp_home';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <Router>
        <div>
          <Link to="/calendar"></Link>

          <Grid>
            <Row>
              <Col md={2}>
                <Row>
                  <Col md={12}>
                    <h3>Menu</h3>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <ul>
                      <li><Link to="/hubstack/">Home</Link></li>
                      <li><Link to="/hubstack/calendar">Calendar</Link></li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col md={10}>
                <Route exact path="/hubstack" component={ Temp }></Route>
                <Route exact path="/hubstack/calendar" component={ Calendar }></Route>
                <Route exact path="/hubstack/calendar/day" component={ DayView }></Route>
              </Col>
            </Row>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
