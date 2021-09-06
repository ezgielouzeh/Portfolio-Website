import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import profileImage from '../assets/images/profile-bw.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li><a href="/Resume" className="button">Resume</a></li>
          <li><a href="#two" className="button">Projects</a></li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Hello World, This is Ezgi!
          </h2>
          <div style={{textAlign: 'center'}}>
            <img
              style={{width: '250px', height: '250px', borderRadius: '250px'}}
              src={profileImage}
            />
          </div>
          <p>
            As an educator, I've always found myself either designing curriculum or building games while working in this field. After being a teacher for over 5 years, I realized I enjoy the backend of teaching as much as the teaching itself so I wanted to move on to a tech-related position where I can still be connected to education. First, I started exploring the front end, learned a little bit of HTML and CSS, started enjoying it, and thought why not tapping into the back end as well. And after exploring the ed-tech world, I decided that I would love to see myself somewhere as an e-learning expert and be involved in a process where the school systems are stuck in achieving their goals as opposed to remote learning possibilities.
            <br /><br />
            My prior experience in education provided me with skills that I can apply to tech and I am looking forward to working with people who believe in lifetime learning.
            <br /><br />
            Proficient: JavaScript, React, Redux, NodeJs, Express, Sequelize, PostgreSQL, Git, Github, HTML, CSS
            Knowledgable: Heroku, Webpack, testing with Mocha, Chai, Jasmine
            Some familiarity: Clarifai.js, Web Speech API. Google Cloud Translation API, React Native, Expo.
          </p>
        </header>
      </div>
    </section>

    <section id="three" className="wrapper style2 special">
      <div className="inner">
        <header className="major">
          <h2>Skills</h2>
          <div style={{border:"2px solid white", padding:"20px"}}>
            <p style={{fontSize:"23px", margin:0}}><b>Proficient</b></p>
            <p>JavaScript, React, Redux, NodeJs, Express, Sequelize, PostgreSQL , Git, Github, HTML, CSS</p>

            <p style={{fontSize:"23px", margin:0}}><b>Knowledgable</b></p>
            <p>Heroku, Webpack, Babel, Mocha, Chai, Jasmine, Material UI, JWT, Mapbox</p>

            <p style={{fontSize:"23px", margin:0}}><b>Some familiarity</b></p>
            <p>Clarifai.js, Web Speech API. Google Cloud Translation API, React Native, Expo</p>

            <p style={{fontSize:"23px", margin:0}}><b>Working on</b></p>
            <p>Selenium, WebdriverIO</p>
          </div>

        </header>
      </div>
    </section>

    <section id="two" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Projects</h2>
          <p>
            These are the projects that I've built during my coding bootcamp at Full Stack Academy.
          </p>
        </header>
        <ul className="features">

          <li className="icon solid fa-laptop">
            <a href="Projects#courses">
              <h3>Four Course</h3>
              <p>
                A web app that gamifies the decision making process in choosing restaurants within a group of friends
              </p>
            </a>
          </li>
          <li className="icon solid fa-laptop">
            <a href="Projects#plantter">
              <h3>Grace Plantter</h3>
              <p>
                A full stack e-commerce website that enables users to shop for plants and purchase them
              </p>
            </a>
          </li>
          <li className="icon solid fa-laptop">
          <a href="Projects#ditchionary">
            <h3>Ditchionary</h3>
            <p>
              An e-reader app that allows Turkish language learners to both hear what they read and see the translation of a word
            </p>
            </a>
          </li>
          <li className="icon solid fa-laptop">
          <a href="Projects#portfolio">
            <h3>Portfolio Website</h3>
            <p>
              This awesome website!
            </p>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4" style={{textAlign: 'center'}}>
      <div>
        <header>
          <h2>Let's connect</h2>
          <p style={{color: 'white'}}>
            I'd love to hear from you and discuss how my skills might match your needs. You can contact me at:
          </p>
          <ul className="icons">
            {config.socialLinks.map (social => {
              const {style, icon, name, url} = social;
              return (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    className={`icon fa-4x ${style} ${icon}`}
                  >
                    <span className="label">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </header>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
