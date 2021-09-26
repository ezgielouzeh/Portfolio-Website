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
            <span className="image right"><img src={ditchionaryGif}/></span>Developed an e-reader app that allows Turkish language learners to both hear what they read and see the translation of a word.
              <br />
              <br />
              Implemented React utilizing Web Speech and Google Cloud Translation API
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
            <span className="image right"><img src={coursesGif}/></span> Built a browser app that gamifies the decision making process in choosing restaurants within a group of people
              <br />
              <br />
              Designed a RESTful app utilizing GeoLocation, Yelp and Mapbox APIs
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
            <span className="image right"><img src={plantterGif}/></span>Built a full stack e-commerce website that enables users to shop for plants and purchase them.
              <br />
              <br />
              Collaborated with a team of four utilizing React, Redux, NodeJs, Express, Sequelize and Github tools.
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
            <br/>
          </div>

          <hr />

          <div id="portfolio">
            <h3>Portfolio Website</h3>
            <h4>Full Stack Developer | Sep 2021 | Solo Project</h4>
            <p>
            <span className="image right"><img src={portfolioGif}/></span>I created my website using Gatsby and React.
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
          <br/>
            <br/>
            <br/>
            <br/>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
