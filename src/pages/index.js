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

    <section id="two" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Projects</h2>
          <p>
            These are the projects that I've built during my coding bootcamp at Full Stack Academy.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
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
                    className={`icon ${style} ${icon}`}
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
