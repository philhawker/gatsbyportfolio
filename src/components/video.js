
import React, { Component } from 'react';
import Typing from "../assets/typing.mp4";

class Video extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <video muted="true" autoPlay="autoplay" loop="loop" style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <source src={Typing} type="video/mp4" />
      </video>
    )
  }
};

export default Video;