import React from 'react';

const Resume = () => {
  return (
    <div className="resume-container text-white">
      <h1>Resume</h1>
      <p>You can view and download my resume by clicking the link below:</p>
      <a href="/assets/Jethro_Resume.pdf" download="Jethro_Resume.pdf" className="text-white">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;