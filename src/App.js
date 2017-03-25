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

class App extends Component {
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
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/calendar">Calendar</Link></li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col md={10}>
                <Route exact path="/calendar" component={ Calendar }></Route>
                <Route exact path="/calendar/day" component={ DayView }></Route>
              </Col>
            </Row>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
