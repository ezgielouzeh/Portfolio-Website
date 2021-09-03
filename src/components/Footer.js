import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      {/* <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} target="_blank" className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul> */}
      <ul className="copyright">
        <li>Created with 💜 by <b>Ezgi Elouzeh</b> | 2021</li>
        <p>Built using <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a></p>
      </ul>
    </footer>
  );
}
