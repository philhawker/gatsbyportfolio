
import React, { Component } from 'react';
import Code from "../assets/code.mp4"

class Video extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <video muted="true" autoPlay="autoplay" loop="loop">
        <source src={Code} type="video/mp4" />
      </video>
    )
  }
};

export default Video;