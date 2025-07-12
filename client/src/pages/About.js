import React from 'react';
import reactIcon from '../assets/icons/react.png';
import nodeIcon from '../assets/icons/nodejs.png';
import mongoIcon from '../assets/icons/mongodb.png';

const About = () => (
  <div className="container">
    <h2>About Me</h2>
    <p>I build modern web apps with the MERN stack.</p>
    <h3>Skills</h3>
    <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
      <img src={reactIcon} alt="React" width="150" />
      <img src={nodeIcon} alt="Node.js" width="150" />
      <img src={mongoIcon} alt="MongoDB" width="150" />
    </div>
  </div>
);

export default About;
