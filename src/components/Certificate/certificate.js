import React from 'react'
import './certificate.css'

const Certificate = () => {


    const handleButtonClick = () => {
        // Path to your PDF file in the public folder
        const resumePath = `${process.env.PUBLIC_URL}/UI Engineer-certificate.pdf`;
        window.open(resumePath, "_blank"); // Opens the PDF in a new tab
      };

      const handleButtonClick2 = () => {
        // Path to your PDF file in the public folder
        const resumePath = `${process.env.PUBLIC_URL}/Python-Fullstack.pdf`;
        window.open(resumePath, "_blank"); // Opens the PDF in a new tab
      };

  return (
    <div id='mycertificates'>
      <section className='certificate'>
        <h2 className='head'>Internships & Certifications</h2>
        <div className="certificate-block">
            <div className='certificate-list'>
                <h2 className='head1'>Intern, Talrop <br /> <span>UI Engineer</span> </h2>
                <h4>OCT, 2022 - SEP, 2023</h4>
                <button className="view" onClick={handleButtonClick}><i class="fa-solid fa-eye"></i> View Certificate</button>
            </div>
            <div className='certificate-list'>
                <h2 className='head1'>Intern, AceTeck Academy<br /> <span>PYTHON - Full Stack</span> </h2>
                <h4>JUL, 2024 - JAN, 2025</h4>
                <button className="view" onClick={handleButtonClick2}><i class="fa-solid fa-eye"></i> View Certificate</button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Certificate;
