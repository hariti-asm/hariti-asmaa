// import React, { useState } from "react";
// import "./services.css";

// const Services = () => {
//   const [toggleState, setToggleState] = useState(0);

//   const toggleTab = (i) => {
//     setToggleState(i);
//   };
//   return (
//     <section className="services section" id="services">
//       <h2 className="section__title">Services</h2>
//       <span className="section__subtitle">What i offer</span>

//       <div className="services__container container grid">
//         <div className="services__content">
//           <div>
//             <i className=" uil uil-web-grid services__icon"></i>
//             <h3 className="services__title">
//               Product <br /> Designer
//             </h3>
//           </div>

//           <span className="services__button" onClick={() => toggleTab(1)}>
//             View More<i className=" uil-arrow-right services__icon-icon"></i>
//           </span>

//           <div
//             className={
//               toggleState === 1
//                 ? "services__modal active-modal"
//                 : "services__modal"
//             }
//           >
//             <div className="services__modal-content">
//               <i
//                 onClick={() => toggleTab(0)}
//                 className=" uil-times services__modal-close"
//               ></i>
//               <h3 className="services__modal-title">Product Designer</h3>
//               <p className="services__modal-description">
//                 Service with more than 1 years of experience. Providing quality
//                 work to clients and companies .
//               </p>

//               <ul className="services__modal-services grid">
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I develop the user interface
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I design responsive websites
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I optimize website performance
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I offer website maintenance and support
//                   </p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="services__content">
//           <div>
//             <i className=" uil uil-arrow services__icon"></i>
//             <h3 className="services__title">
//               {" "}
//               UI/UX <br /> Designer{" "}
//             </h3>
//           </div>

//           <span className="services__button" onClick={() => toggleTab(2)}>
//             View More<i className=" uil-arrow-right services__icon-icon"></i>
//           </span>

//           <div
//             className={
//               toggleState === 2
//                 ? "services__modal active-modal"
//                 : "services__modal"
//             }
//           >
//             <div className="services__modal-content">
//               <i
//                 className=" uil-times services__modal-close"
//                 onClick={() => toggleTab(0)}
//               ></i>
//               <h3 className="services__modal-title">UI/UX Designer</h3>
//               <p className="services__modal-description">
//                 Service with more than 1 years of experience. Providing quality
//                 work to clients and companies .
//               </p>

//               <ul className="services__modal-services grid">
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I develop the user interface
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I design responsive websites
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I optimize website performance
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I offer website maintenance and support
//                   </p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="services__content">
//           <div>
//             <i className=" uil uil-edit services__icon"></i>
//             <h3 className="services__title">
//               Visual <br /> Designer
//             </h3>
//           </div>

//           <span className="services__button" onClick={() => toggleTab(3)}>
//             View More<i className=" uil-arrow-right services__icon-icon"></i>
//           </span>

//           <div
//             className={
//               toggleState === 3
//                 ? "services__modal active-modal"
//                 : "services__modal"
//             }
//           >
//             <div className="services__modal-content">
//               <i
//                 className=" uil-times services__modal-close"
//                 onClick={() => toggleTab(0)}
//               ></i>
//               <h3 className="services__modal-title">Visual Designer</h3>
//               <p className="services__modal-description">
//                 Service with more than 1 years of experience. Providing quality
//                 work to clients and companies .
//               </p>

//               <ul className="services__modal-services grid">
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I develop the user interface
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I design responsive websites
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I optimize website performance
//                   </p>
//                 </li>
//                 <li className="services__modal-services">
//                   <p className="services__modal-info">
//                     <i className="uil uil-check-circle services__modal-icon"></i>{" "}
//                     I offer website maintenance and support
//                   </p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

//!!!! __________________________________________________
//!!!! __________________________________________________

import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (i) => {
    setToggleState(i);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
          <i className="uil  services__icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="30px" height="30px" viewBox="0 0 32 32">
          <path d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"/>
        </svg></i>
            <h3 className="services__title">Web Development</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More<i className="uil-arrow-right services__icon-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className=" uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Web Development</h3>
              <p className="services__modal-description">
                Offering web development services using HTML, CSS, JavaScript,
                Vue, and Tailwind CSS Expertise in creating responsive and
                user-friendly web applications.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Building dynamic and interactive websites
                  </p>
                </li>
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Implementing responsive design principles
                  </p>
                </li>
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Utilizing Vue and Tailwind CSS for efficient development
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-database services__icon"></i>
            <h3 className="services__title">Database Management</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More<i className="uil-arrow-right services__icon-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className=" uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Database Management</h3>
              <p className="services__modal-description">
                Providing database management solutions using MySQL and NoSQL
                databases like MongoDB. Ensuring efficient data storage and
                retrieval for your applications.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Setting up and configuring MySQL databases
                  </p>
                </li>
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Implementing MongoDB for flexible data storage
                  </p>
                </li>
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Optimizing database performance and scalability
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
       
              <i className="uil  services__icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" version="1.1">
              <title>laravel</title>
              <path d="M13.143 23.585l10.46-5.97-4.752-2.736-10.453 6.019zM24.084 11.374l-4.757-2.736v5.417l4.758 2.737zM24.559 5.078l-4.756 2.736 4.756 2.736 4.755-2.737zM9.911 18.928l2.76-1.589v-11.934l-4.758 2.738v11.934zM7.437 1.846l-4.756 2.737 4.756 2.737 4.753-2.737zM2.204 5.406v18.452l10.464 6.022v-5.471l-5.472-3.096c-0.018-0.013-0.032-0.027-0.051-0.039-0.014-0.013-0.030-0.023-0.044-0.034l-0.001-0.003c-0.015-0.015-0.028-0.031-0.039-0.049l-0.001-0.001c-0.014-0.013-0.025-0.028-0.035-0.045l-0.001-0.001h-0.003c-0.008-0.015-0.016-0.035-0.024-0.055l-0.001-0.004c-0.007-0.015-0.015-0.032-0.022-0.051l-0.001-0.003c-0.004-0.020-0.008-0.045-0.010-0.070l-0-0.002c-0.003-0.015-0.006-0.033-0.008-0.051l-0-0.001v-12.759l-2.757-1.59zM24.085 23.857v-5.422l-10.464 5.974v5.47zM29.789 14.055v-5.417l-4.756 2.737v5.417zM30.725 7.69c0.011 0.038 0.018 0.081 0.018 0.126v0 6.513c-0 0.176-0.095 0.329-0.237 0.411l-0.002 0.001-5.468 3.149v6.241c-0 0.175-0.095 0.328-0.236 0.411l-0.002 0.001-11.416 6.57c-0.024 0.013-0.052 0.025-0.081 0.033l-0.003 0.001-0.030 0.013c-0.036 0.011-0.078 0.017-0.121 0.017s-0.085-0.006-0.125-0.018l0.003 0.001c-0.015-0.004-0.027-0.009-0.039-0.016l0.001 0.001c-0.031-0.011-0.057-0.021-0.082-0.033l0.004 0.002-11.413-6.57c-0.144-0.084-0.239-0.237-0.239-0.412v0-19.548c0-0.044 0.007-0.087 0.019-0.127l-0.001 0.003c0.004-0.015 0.013-0.025 0.018-0.040 0.009-0.029 0.019-0.053 0.030-0.076l-0.001 0.003c0.008-0.016 0.018-0.030 0.029-0.042l-0 0 0.042-0.057 0.047-0.034c0.018-0.015 0.034-0.030 0.052-0.043h0.001l5.708-3.285c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.71 3.285c0.019 0.013 0.035 0.027 0.051 0.042l-0-0 0.048 0.034c0.016 0.018 0.025 0.038 0.042 0.057 0.012 0.012 0.022 0.026 0.031 0.041l0.001 0.001c0.010 0.020 0.020 0.044 0.029 0.069l0.001 0.004 0.016 0.040c0.011 0.035 0.018 0.076 0.018 0.118 0 0.002 0 0.004-0 0.006v-0 12.208l4.756-2.737v-6.241c0-0.001 0-0.002 0-0.002 0-0.043 0.006-0.085 0.017-0.125l-0.001 0.003c0.004-0.013 0.013-0.025 0.016-0.040 0.010-0.030 0.020-0.054 0.032-0.078l-0.002 0.004c0.009-0.015 0.023-0.025 0.032-0.042 0.015-0.019 0.027-0.038 0.042-0.054 0.014-0.013 0.029-0.025 0.045-0.035l0.001-0.001c0.018-0.013 0.033-0.029 0.052-0.040h0.001l5.708-3.286c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.708 3.286c0.020 0.013 0.034 0.027 0.053 0.039 0.015 0.013 0.032 0.023 0.046 0.035 0.016 0.018 0.028 0.038 0.043 0.056 0.011 0.012 0.021 0.026 0.030 0.040l0.001 0.001c0.012 0.022 0.022 0.047 0.030 0.073l0.001 0.003c0.008 0.012 0.014 0.025 0.019 0.039l0 0.001z"/>
              </svg>{" "}
              </i>

            <h3 className="services__title ">Backend Development</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More<i className="uil-arrow-right services__icon-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className=" uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Backend Development</h3>
              <p className="services__modal-description">
                Specializing in backend development using
                Laravel and Python. Building robust server-side solutions to
                power your web applications.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Creating RESTful APIs .
                  </p>
                </li>
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Developing scalable backend architectures
                  </p>
                </li>
                <li className="services__modal-services">
                  <p className="services__modal-info">
                    <i className="uil uil-check-circle services__modal-icon"></i>{" "}
                    Using Laravel and Python for efficient backend development
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
