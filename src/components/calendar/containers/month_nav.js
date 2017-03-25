import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class MonthNav extends Component {
  constructor(props) {
    super(props);

    this.state = {  };
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
      console.log(year);
      month = 11;
    } else if (this.state.current.month()+change > 11) {
      year++;
      month = 0;
    } else {
      month += change;
    }

    this.props.monthView(moment().year(year).month(month))
    // this.setState({current: moment().year(year).month(month)}, () => { console.log(this.state.current.format('MMMM YYYY'));this.componentDidMount() });
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ monthView }, dispatch);
}

export default connect(null, mapDispatchToProps)(MonthNav);