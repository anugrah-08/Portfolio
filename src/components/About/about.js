import React from 'react'
import './about.css'
import html from '../../assets/html.png'
import css from '../../assets/css-3.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import github from '../../assets/github.png'

const About = () => {
  return (
    <div id='aboutme'>
      <section className="about">
          <span className="heading">About Me</span>
          <span className="aboutPara">A motivated and quick-learning fresh graduate with a
              degree in Bachelor of Computer Application, possessing
              a strong foundation in Web Development. Eager to apply
              academic knowledge to real-world challenges and
              contribute to innovative projects. Proficient in VS code,
              React js with hands-on experience through internships
              and academic projects. Passionate about continuous
              learning and excited to grow in the IT industry. Strong
              problem-solving, teamwork, and communication skills.
          </span>
          <span className='education'>
            <h2>Education</h2>
            <ul>
              <li className='collegeBlock'>
                <p className="degree">B.C.A</p>
                <p className="college">Naher Arts and Science College Kanhirode (Kannur University)</p>
                <p>2024</p>
              </li>
              <li className='plustwoBlock'>
                <p className="plustwo">Plus-Two - Computer Science</p>
                <p className="school1">AKGMGHSS Pinarayi</p>
                <p>2021</p>
              </li>
              <li className='sslcBlock'>
                <p className="sslc">S.S.L.C</p>
                <p className="school2">St Joseph's HSS Thalassery</p>
                <p>2019</p>
              </li>
            </ul>
          </span>
          <div className="skillBars">
            <h2 className='head'>Skills</h2>
            <div className="skillBar">
              <img src={html} alt="html-logo" className="skillBarImg html" />
              <div className="skillBarText">
                <h2>HTML</h2>
                <p>Writing semantic HTML to ensure web pages are both accessible and SEO-friendly.</p>
              </div>
            </div>
            <div className="skillBar">
              <img src={css} alt="css-logo" className="skillBarImg" />
              <div className="skillBarText">
                <h2>CSS</h2>
                <p>Proficient in using frameworks like Bootstrap and Tailwind CSS to accelerate development.</p>
              </div>
            </div>
            <div className="skillBar">
              <img src={js} alt="js-logo" className="skillBarImg" style={{borderRadius: '4px'}} />
              <div className="skillBarText">
                <h2>JavaScript</h2>
                <p>I have a strong foundation in JavaScript, enabling me to create interactive and engaging web applications.</p>
              </div>
            </div>
            <div className="skillBar">
              <img src={react} alt="react-logo" className="skillBarImg" />
              <div className="skillBarText">
                <h2>React</h2>
                <p>I am passionate about creating dynamic and responsive web applications using React. </p>
              </div>
            </div>
            <div className="skillBar">
              <img src={github} alt="css-logo" className="skillBarImg" />
              <div className="skillBarText">
                <h2>GitHub</h2>
                <p>Explore my GitHub profile to view projects that demonstrate my technical skills and problem-solving abilities.</p>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default About;
