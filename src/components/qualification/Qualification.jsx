
import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (i) => {
    setToggleState(i);
  };

  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {toggleState === 1 && (
            <div className="qualification__content qualification__content-active">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
              Software Engineer.</h3>
                  <span className="qualification__subtitle">
                  Alx_Africa(Online). 
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2023 - 2024
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                  Full Stack Developer.                </h3>
                  <span className="qualification__subtitle">
                 YouCode (Bootcamp) Safi, Speciality in web dev. 
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2023-2025
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
               Bachelor Degree.</h3>
                  <span className="qualification__subtitle">
                  Faculty Of Science && Technics Settat Speciality. 
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2019 - 2023
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          )}

          {toggleState === 2 && (
            <div className="qualification__content qualification__content-active">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                  recruiting Plateform{" "}
                  </h3>
                  <span className="qualification__subtitle">

                  Creating an interactive and responsive web platform to streamline recruitment and job searching, infused with my unique touch (powered by OpenAI)
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2024 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Events Reservation</h3>
                  <span className="qualification__subtitle">
                   
                 Crafting a Laravel application with Tailwind CSS for efficient reservation system management(for clients,organizers and admin), combining design and code prowess for an easy website.
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2023
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Clinic Management</h3>
                  <span className="qualification__subtitle">
                    Building a comprehensive clinic application with Lravel and Tailwind CSS
                    for patients and doctors to make the process with an easy manner.
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    2024 
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
