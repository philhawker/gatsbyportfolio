import PropTypes from 'prop-types'

import React, { Component } from 'react';
import Typist from 'react-typist';

export default class TypeWriter extends Component {

  render() {

    return (
      <Typist
        startDelay={1800}
        avgTypingDelay={50}
        cursor={{ hideWhenDone: "true", hideWhenDoneDelay: 2000 }}
      >
        <span>I'm a husband</span>
        <Typist.Delay ms={700} />
        <br />
        <span>I'm a dad</span>
        <Typist.Delay ms={700} />
        <br />
        <span>I'm a Web Designer</span>
        <Typist.Backspace count={12} delay={500} />
        <span>Front-End Developer</span>
        <Typist.Backspace count={19} delay={500} />
        <span>Meme Enthusiast</span>
        <Typist.Backspace count={15} delay={800} />
        <span>down-to-earth nerd</span>
        <Typist.Backspace count={18} delay={800} />

        <span>Full Stack Engineer</span>

      </Typist>
    );
  }

}