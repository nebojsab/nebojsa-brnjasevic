import React, {Component} from 'react'
import {InlineWidget} from 'react-calendly'
class Calendly extends Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }
  componentWillUnmount() {
    // whatever cleanup stuff you need here
  }
  render(){
    return (
      <div>
        {/* <InlineWidget url="https://calendly.com/d/g6q-hyq-dv2/test-meeting" /> */}
        <InlineWidget url="https://calendly.com/nebojsa-1" />
      </div>
    );
  }
}

export default Calendly;