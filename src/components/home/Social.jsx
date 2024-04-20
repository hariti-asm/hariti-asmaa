import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/asmae-hariti-015b3a266/"
        className="home__social-icon"
        target="_blank" rel="noopener noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/hariti-asm/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer" 
      >
        <i class="uil uil-github"></i>
      </a>

      <a
        href="mailto:haritiasmae@gmail.com"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-envelope"></i>
      </a>
    </div>
  );
};

export default Social;
