import React from "react";
import "./project.css";
import Nursery from "../../assets/e2.jpg";
import Clinic from "../../assets/clinic.jpg";
import jobFinder from "../../assets/jobFinder.jpg";

const Project = () => {
  const projects = [
    {
      title: "Job Finder",
      image: jobFinder,
      demo: "https://github.com/hariti-asm/jobfinder",
      repo: "https://github.com/hariti-asm/jobfinder",
      description: "Interactive Recruitement Plateform Built with Laravel && Vue.js.",
    },
    {
      title: "Clini-Connect",
      image: Clinic,
      demo: "https://github.com/hariti-asm/CliniConnect",
      repo: "https://github.com/hariti-asm/CliniConnect",
      description:
        "Comprehensive Clinic Management using Laravel && Tailwind CSS",
    },
    {
      title: "Evento",
      image: Nursery,
      demo: "https://github.com/hariti-asm/Evento",
      repo: "https://github.com/hariti-asm/Evento",
      description: "Events Reservation app with Laravel and Tailwind CSS.",
    },
  ];

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">A selection of my range</span>

      <div className="projects__container container grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project__data">
              <div className="project__img-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project__img"
                />
              </div>
              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.demo}
                className="project__button button--flex button--small button--link"
              >
                Demo<i className="uil uil-arrow-right button__icon"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.repo}
                className="project__button button--flex button--small button--link"
              >
                GitHub<i className="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
