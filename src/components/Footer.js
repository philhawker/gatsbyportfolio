import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
        <p className="copyright"> 2020 Phil Hawker Portfolio | Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a>, a React framework</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
