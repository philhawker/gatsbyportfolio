import PropTypes from 'prop-types'
import React from 'react'
import ph from "../images/logos/ph.png"
import TypeWriter from "../components/typist"

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}} >
    <div className="logo">
      <span className="icon">

      </span>
    </div>

    <div className="content">
      <div className="inner">
        <h1>I'm Phil Hawker</h1>
        <TypeWriter />
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About Me
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('skills')
            }}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
