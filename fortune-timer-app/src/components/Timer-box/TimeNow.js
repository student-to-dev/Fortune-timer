import React, {Component} from 'react';
import styled from 'styled-components';
import Moment from 'moment';


class TimeNow extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
        
      });
    }
    render() {
      return (
        <p className="App-clock">
           {this.state.time}.
        </p>
      );
    }
  }
 
export default TimeNow;