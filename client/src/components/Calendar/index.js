import "./style.css";
import Calendar from 'react-calendar'
import React, { Component } from 'react';

class Calendar1 extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="article text-center" id="calendar">>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          onClick={console.log(this.state.date)}
        />
      </div>
    );
  }
}

export default Calendar1;
