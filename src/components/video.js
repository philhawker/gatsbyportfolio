
import React, { Component } from 'react';
import Code from "../assets/code.mp4"
import Words from "../assets/words.mp4"

class Video extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <video muted="true" autoPlay="autoplay" loop="loop">
        <source src={Words} type="video/mp4" />
      </video>
    )
  }
};

export default Video;