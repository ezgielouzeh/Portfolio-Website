import React from 'react';

import Layout from '../components/Layout';
import resume from '../assets/resume/resume.pdf';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Resume</h2>
        <a href={resume} target="_blank"><p>Download</p></a>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>📚 Education</h3>
          <h4>Full Stack Academy | New York | 2021</h4>
          <p>Software Engineering Immersive</p>
          <h4>Hunter College (CUNY) | New York | 2020</h4>
          <p>Certificate in Graphic and Web Designs</p>
          <h4>Istanbul University | Istanbul | 2011</h4>
          <p>Bachelor Degree in American Literature | Minor in Education</p>

          <hr />

          <h3>👩‍💻 Experience</h3>
          <h4>Language Teacher | Multiple Schools | 2011 - 2020</h4>
          <ul>
            <li>Taught over 120 students per semester (average 20 students per class) ranging between 5-8 classes across 3 schools.</li>
            <li>Created and assessed educational materials in partnership with 55+ educators weekly in order to ensure that they are aligned with the curriculum.</li>
            <li>Developed learning strategies, through creative use of interactive whiteboard technology and project-based activities, resulting in motivating the students to learn and actively communicate in the target language.</li>
          </ul>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
