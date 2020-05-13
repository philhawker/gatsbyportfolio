import PropTypes from 'prop-types'
import React from 'react'
import family from '../images/family.jpg'
import engagement from '../images/engagement.jpg'
import fantasticfries from '../images/fantasticfries.png'
import bottegaportfolio from '../images/bottegaportfolio.jpg'
import pic02 from "../images/pic02.jpg"
import react from '../images/logos/react.png'
import python from '../images/logos/python.png'
import css from '../images/logos/css.png'
import scss from '../images/logos/scss.png'
import django from '../images/logos/django.png'
import js from '../images/logos/js.png'
import mongo from '../images/logos/mongo.png'
import mysql from '../images/logos/mysql.png'
import sqlite from '../images/logos/sqlite.png'
import git from '../images/logos/git.png'
import firstday from "../images/firstday.jpg"
import game from "../images/game.jpg"
import sadiebike from "../images/sadiebike.jpg"
import mom from "../images/mom.jpg"
import fammix from "../images/fammix.jpg"
import portfolio from "../images/portfolio.jpg"
import gatsby from "../images/logos/gatsby.png"


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {/* ABOUT */}
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={engagement} alt="" />
          </span>
          <p>
            Ever since i was about 12 years old, I discovered a fascination with building something and actually seeing it function the way I had intended it to. Even as an adult, successfully assembling my daughters crib was chalked up as a win for me.
          </p>

          <p>
            I attended Bottega Tech's full time, 12 week, Full-Stack Engineering course. I worked with and learned a ton of different technologies, frameworks, and languages. Since graduating, I've leaned towards a passion for React. If I'm not consumed by a development project, then I'll most definitely be riding motocross, eating at an awesome restaurant, or sitting in front of my PC and enjoying some kind of game with an incredible single player experience.
          </p>
          {close}
        </article>
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">My Family</h2>
          <span className="image main">
            <img src={family} alt="" />
          </span>
          <span className="image main">
            <img src={fammix} alt="" />
          </span>
          <span className="image main">
            <img src={sadiebike} alt="" />
          </span>
          <span className="image main">
            <img src={firstday} alt="" />
          </span>
          <span className="image main">
            <img src={game} alt="" />
          </span>
          <span className="image main">
            <img src={mom} alt="" />
          </span>

          {close}
        </article>
        {/* END ABOUT */}

        {/* PROJECTS */}
        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none', }}
        >
          <h2 className="major">Fantastic Fries</h2>
          <span className="image main">
            <img src={fantasticfries} alt="" />
          </span>
          <p style={{ fontSize: "0.8rem", fontStyle: "italic" }}>
            HTML, CSS, Grid, FlexBox
          </p>
          <p>
            A demo restaurant site that was built during my studies at Bottega Tech.
          </p>

          <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "60px" }}>
            <button ><a href="https://philhawker-fries.netlify.app/" target="_blank">Visit Fantastic Fries</a></button>
            <button ><a href="https://github.com/philhawker/fantastic-fries-website" target="_blank">Source Code</a></button>
          </div>
          {close}
        </article>


        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Bottega Course Portfolio</h2>
          <span className="image main">
            <img src={bottegaportfolio} alt="" />
          </span>
          <p style={{ fontSize: "0.8rem", fontStyle: "italic" }}>
            React, API, HTML, SCSS, CSS Grid, FlexBox
          </p>
          <p>
            A React based Portfolio design utilizing API authentication, React Routing, and React Redux.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "60px" }}>
            <button ><a href="https://philhawker.herokuapp.com/" target="_blank">Visit Bottega Portfolio</a></button>
            <button ><a href="https://github.com/philhawker/philhawker" target="_blank">Source Code</a></button>
          </div>
          {close}
        </article>


        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Gatsby.js Powered Portfolio</h2>
          <span className="image main">
            <img src={portfolio} alt="" />
          </span>
          <p style={{ fontSize: "0.8rem", fontStyle: "italic" }}>
            Gatsby.js, React, API authentication, HTML, SCSS, CSS Grid, Flexbox
          </p>
          <p>
            Despite being unfinished, this was my original portfolio design before deciding to rebuild from the ground up to what is now my current portfolio.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "60px" }}>
            <button ><a href="https://phil-hawker.herokuapp.com/" target="_blank">Visit Original Portfolio</a></button>
            <button ><a href="https://github.com/philhawker/phil-hawker" target="_blank">Source Code</a></button>
          </div>
          {close}
        </article>


        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">"Movie Shelf" Database</h2>

          <p style={{ fontSize: "0.8rem", fontStyle: "italic" }}>
            Python, PIP, Flask, SQLAlchemy, CRUD, Jinja
          </p>
          <p>
            A simple title-sorting and databasing application utilizing Flask, including full CRUD functionality
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "60px" }}>
            <button ><a href="https://github.com/philhawker/MovieShelf-Simple-Movie-Database" target="_blank">Source Code</a></button>
          </div>
          {close}
        </article>
        {/* END PROJECTS */}

        {/* SKILLS */}
        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none', marginBottom: "43px", }}
        >
          <h2 className="major">Skills</h2>

          <span className="image main" >
            <div style={{ display: "flex", marginBottom: "1em", marginTop: "inherit", justifyContent: "space-between" }}>
              <div style={{ display: "flex", }}>
                <lu>
                  <img src={react} alt="" />

                  <div style={{ display: "flex", justifyContent: "center" }}>React</div>
                </lu>
              </div>
              <div style={{ display: "flex" }}>
                <lu>
                  <img src={python} alt="" />

                  <div style={{ display: "flex", justifyContent: "center" }}>Python</div>
                </lu>
              </div>

              <div style={{ display: "flex" }} >
                <lu>
                  <img src={css} alt="" />

                  <div style={{ display: "flex", justifyContent: "center" }}>CSS</div>
                </lu>
              </div>
              <div style={{ display: "flex" }}>
                <lu>
                  <img src={scss} alt="" />

                  <div style={{ display: "flex", justifyContent: "center" }}>SCSS</div>
                </lu>
              </div>
              <div style={{ display: "flex" }}>
                <lu>
                  <img src={django} alt="" />

                  <div style={{ display: "flex", justifyContent: "center" }}>Django</div>
                </lu>
              </div>
            </div>


            <div style={{ display: "flex", marginTop: "0", marginBottom: "2em", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                <lu>
                  <img src={gatsby} alt="" />

                  <div style={{ display: "flex", justifyContent: "center" }}>Gatsby.js</div>
                </lu>
              </div>
              <div style={{ display: "flex" }}>
                <lu>
                  <img src={js} alt="" />

                  <div style={{ display: "flex", justifyContent: "center" }}>JavaScript</div>
                </lu>
              </div>
              <div style={{ display: "flex" }}>
                <lu>
                  <img src={mysql} alt="" />

                  <div style={{ display: "flex", justifyContent: "center" }}>MySQL</div>
                </lu>
              </div>
              <div style={{ display: "flex" }}>
                <lu>
                  <img src={sqlite} alt="" />

                  <div style={{ display: "flex", justifyContent: "center" }}>SQLite</div>
                </lu>
              </div>
              <div style={{ display: "flex" }}>
                <lu>
                  <img src={git} alt="" />

                  <div style={{ display: "flex", justifyContent: "center" }}>Git</div>
                </lu>
              </div>
            </div>
          </span>



          {close}
        </article>
        {/* END SKILLS */}

        {/* CONTACT */}
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact Me</h2>
          <form method="post" action="https://formspree.io/philhawker1211@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="_replyto" id="email" />

            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/philhawker/"
                className="icon fa-linkedin"
                target="_blank"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/phil.hawker.7"
                className="icon fa-facebook"
                target="_blank"
              >

                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/philhawker"
                className="icon fa-github"
                target="_blank"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/phil_hawker/"
                className="icon fa-instagram"
                target="_blank"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
        {/* END CONTACT */}
      </div >
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
