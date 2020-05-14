
import React, { Component } from 'react';
import Newwords from "../assets/newwords.mp4"

class Video extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <video muted="true" autoPlay="autoplay" loop="loop" style={{ width: "100%", height: "116%", objectFit: "fill" }}>
        <source src={Newwords} type="video/mp4" />
      </video>
    )
  }
};

export default Video;