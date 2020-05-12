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
import TypeWriter from "./typist"


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
        <TypeWriter />
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
            Ever since i was about 12 years old, I discovered a fascination with building something and actually seeing it function the way I had intended it to. It was everything from rebuilding a motorcycle engine to upgrading the family computer's ram, what is now considered pathetic, to 512 MB. Even as an adult, successfully assembling my daughters crib is chalked up as a win for me.
          </p>
          <p>
            I've always felt that these traits I had discovered were critical components to my overall happiness and success in my career, however, I had no idea what field these should be applied to. Until I took a leap of faith and began my development journey.
          </p>
          <p>
            I attended Bottega Tech's full time, 12 week, Full-Stack Engineering course. And it was hardcore! I love working with many different frameworks and libraries such as Flask, Django, Node, and most of all React. If I'm not consumed by a development project, then I'll most definitely be riding motocross, eating at an awesome restaurant, or sitting in front of my PC and enjoying some kind of game with an incredible single player experience.
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
          <p>
            Ever since i was about 12 years old, I discovered a fascination with building something and actually seeing it function the way I had intended it to. It was everything from rebuilding a motorcycle engine to upgrading the family computer's ram, what is now considered pathetic, to 512 MB. Even as an adult, successfully assembling my daughters crib is chalked up as a win for me.
          </p>
          <p>
            I've always felt that these traits I had discovered were critical components to my overall happiness and success in my career, however, I had no idea what field these should be applied to. Until I took a leap of faith and began my development journey.
          </p>
          <p>
            I attended Bottega Tech's full time, 12 week, Full-Stack Engineering course. And it was hardcore! I love working with many different frameworks and libraries such as Flask, Django, Node, and most of all React. If I'm not consumed by a development project, then I'll most definitely be riding motocross, eating at an awesome restaurant, or sitting in front of my PC and enjoying some kind of game with an incredible single player experience.
          </p>
          {close}
        </article>
        {/* END ABOUT */}

        {/* PROJECTS */}
        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Fantastic Fries</h2>
          <span className="image main">
            <img src={fantasticfries} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
          <h2 className="major">Projects 3</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>
        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects 4</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
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
                <img src={react} alt="" />
              </div>
              <div style={{ display: "flex" }}>
                <img src={python} alt="" />
              </div>

              <div style={{ display: "flex" }} >
                <img src={css} alt="" />
              </div>
              <div style={{ display: "flex" }}>
                <img src={scss} alt="" />
              </div>
              <div style={{ display: "flex" }}>
                <img src={django} alt="" />
              </div>
            </div>


            <div style={{ display: "flex", marginTop: "0", marginBottom: "2em", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                <img src={js} alt="" />
              </div>
              <div style={{ display: "flex" }}>
                <img src={mongo} alt="" />
              </div>
              <div style={{ display: "flex" }}>
                <img src={mysql} alt="" />
              </div>
              <div style={{ display: "flex" }}>
                <img src={sqlite} alt="" />
              </div>
              <div style={{ display: "flex" }}>
                <img src={git} alt="" />
              </div>
            </div>
          </span>


          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
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
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
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
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
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
