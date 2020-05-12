import PropTypes from 'prop-types'

import React, { Component } from 'react';
import Typist from 'react-typist';

export default class TypeWriter extends Component {

  render() {
    return (
      <Typist
        startDelay={1800}
      >
        <span>I'm a husband</span>
        <Typist.Delay ms={800} />
        <br />
        <span>I'm a dad</span>
        <Typist.Delay ms={800} />
        <br />
        <span>I'm a Full Stack Engineer</span>

      </Typist>
    );
  }
}