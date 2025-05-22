import React from 'react'
import { Link } from 'react-router-dom'
import me from '../../assets/me.jpg'
import './intro.css'

const Intro = () => {

  const handleButtonClick = () => {
    // Path to your PDF file in the public folder
    const resumePath = "/resume.pdf";
    window.open(resumePath, "_blank"); // Opens the PDF in a new tab
  };


  return (
    <section id='intro'>
        <div className='introContent'>
            <span className="hello">Hello,<br /></span>
            <span className="introText">I'm <span className="name">Anugrah</span> <br /> Frontend Developer </span>
            <p className="introPara"> A motivated and quick-learning fresh graduate with a
                    degree in <br /> Bachelor of Computer Application, possessing
                    a strong foundation in Web Development.</p>
            <Link><button className='resume' onClick={handleButtonClick}><i class="fa-solid fa-download"></i> My Resume</button></Link>
        </div>
        <img src={me} alt="Profile" className="introImg" />
    </section>
  )
}

export default Intro;