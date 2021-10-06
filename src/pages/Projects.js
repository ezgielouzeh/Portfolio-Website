import React from 'react';

import Layout from '../components/Layout';
import config from '../../config';
import portfolioGif from '../assets/images/portfolio.gif';
import plantterGif from '../assets/images/plantter.gif';
import coursesGif from '../assets/images/courses.gif';
import ditchionaryGif from '../assets/images/ditchionary.gif';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Projects</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <div id="ditchionary">
            <h3>Ditchionary</h3>
            <h4>Full Stack Developer | Mar 2021 | Solo Project</h4>
            <p>
              <span className="image right"><img src={ditchionaryGif} /></span>
              I developed an e-reader app that allows Turkish language learners to both hear what they read and see the translation of a word on the spot. The idea is to get rid of dictionaries while learning a language. I wanted to build something that will make the language learning process easier.
              <br /><br />
              Users can signup and login, in the home page they can see all the available books, they can go to a book, navigate to the pages, and read the page with two features;
              <br /><br />
              1) They can hear the text by clicking on the read button
              <br />
              2) They can see the translation of a word, when the user selects a word they will see a popup with the translation and hear the pronunciation at the same time.
              <br /><br />
              I implemented React on the frontend and utilized Node, Express and Sequelize for the backend.
              <br /><br />
              I worked on two APIs;
              <br />
              - Google Translate API<br />
              - Speech Synthesis feature of WebSpeech API<br />
              <br />
              For pagination, I used a react library to move around pages.
              I styled it with pure CSS.
            </p>

            <ul className="icons">
              {config.projects.ditchionary.map (social => {
                const {style, icon, name, url} = social;
                return (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      className={`icon fa-2x ${style} ${icon}`}
                    >
                      <span className="label">{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <br />
          <hr />

          <div id="courses">
            <h3>Four Course</h3>
            <h4>Full Stack Developer | May 2021 | Team Project</h4>
            <p>
              <span className="image right"><img src={coursesGif} /></span>
              Collaborating with a team of four, I built a browser app that gamifies the decision making process in choosing restaurants within a group of people.
              <br/><br/>
              We designed a RESTful app utilizing GeoLocation, Yelp and Mapbox APIs.
              <br/><br/>
              My contributions to the project include;<br/>
              - Getting the user’s location with GeoLocation API<br/>
              - Displaying upcoming and past events based on the date<br/>
              - Utilizing NodeMailer to send out mails to a group of people<br/>
              - Date and Time picker<br/>
              - Styling with Material UI<br/>
            </p>

            <ul className="icons">
              {config.projects.courses.map (social => {
                const {style, icon, name, url} = social;
                return (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      className={`icon fa-2x ${style} ${icon}`}
                    >
                      <span className="label">{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <br />
          <br />
          <hr />

          <div id="plantter">
            <h3>Grace Plantter</h3>
            <h4>Full Stack Developer | May 2021 | Team Project</h4>
            <p>
              <span className="image right"><img src={plantterGif} /></span>
              With a team of four, I built a full stack e-commerce website that enables users to shop for plants and purchase them.
              <br /><br />
              We utilized React, Redux, NodeJs, Express, PostgreSQL, Sequelize and Github tools.
              <br /><br />
              My contributions to the project include;
              <br />
              - Home page for the list of all products<br />
              - Database schema and building Sequelize models<br />
              - Security steps such as no secrets on gitHub, protected API, and Express best practices
              <br />
              - Working on Stripe as a stretch goal<br />
            </p>
            <ul className="icons">
              {config.projects.plantter.map (social => {
                const {style, icon, name, url} = social;
                return (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      className={`icon fa-2x ${style} ${icon}`}
                    >
                      <span className="label">{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <br />
          </div>

          <hr />

          <div id="portfolio">
            <h3>Portfolio Website</h3>
            <h4>Full Stack Developer | Sep 2021 | Solo Project</h4>
            <p>
              <span className="image right"><img src={portfolioGif} /></span>
              I created my website using Gatsby and redesigned it utilizing React. I also experimented with a different portfolio project to explore React Hooks, which I wanted to improve myself at, before I settled in this version.
            </p>

            <ul className="icons">
              {config.projects.portfolio.map (social => {
                const {style, icon, name, url} = social;
                return (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      className={`icon fa-2x ${style} ${icon}`}
                    >
                      <span className="label">{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
