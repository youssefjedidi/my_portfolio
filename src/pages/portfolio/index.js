import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta, experience, services, introdata, skills, education } from "../../content_option";
 import Typewriter from "typewriter-effect";
 import { Link } from "react-router-dom";

export const Portfolio = () => {
  
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8" className="d-flex align-items-center">
            <div>
              <h1 className="mb-3">Hello, I am <span className="Name">{meta.title}</span></h1>
              <p className="lead">A Computer Engineering student from Canada. I aim to deepen my understanding in various areas of technology and product development.</p>
            </div>
          </Col>
          <Col lg="4" className="text-center">
            <img 
              src="/images/my_pic.jpeg" 
              alt="Profile of Youssef Jedidi" 
              className="img-fluid rounded-circle profile-pic mb-3" 
              style={{maxWidth: '200px', height: 'auto'}}
            />
          </Col>
        </Row>

        <div className="intro mx-auto">
          <h2 className="Name mb-5">
            <Typewriter
              options={{
                strings: [
                  introdata.animated.first,
                  introdata.animated.second,
                  introdata.animated.third,
                  introdata.animated.fourth,
                  introdata.animated.fifth,
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </h2>

          <Row className="mb-5">
            <Col lg="12">
              <h1 className="display-4 mb-4">Projects</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>

          <div className="mb-5">
            <Row>
              {dataportfolio.map((data, i) => {
                return (
                  <Col lg="4" md="6" className="mb-4" key={i}>
                    <div className="project-card h-100">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-img-container">
                          <img
                            src={data.img}
                            alt={`Project: ${data.description}`}
                            className="card-img-top project-image"
                            loading="lazy"
                          />
                          <div className="card-overlay">
                            <div className="overlay-content">
                              <h5 className="card-title text-white mb-3">{data.description}</h5>
                              <a
                                href={data.link}
                                className="btn btn-light btn-sm me-2"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fab fa-github me-1"></i>
                                View Code
                              </a>
                              <button className="btn btn-outline-light btn-sm">
                                <i className="fas fa-eye me-1"></i>
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="card-body d-flex flex-column">
                          <h6 className="card-title text-truncate mb-2">{data.description}</h6>
                          <div className="mt-auto">
                            <div className="d-flex justify-content-between align-items-center">
                              <small className="text-muted">
                                <i className="fas fa-code-branch me-1"></i>
                                Project {i + 1}
                              </small>
                              <a
                                href={data.link}
                                className="btn btn-outline-primary btn-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fas fa-external-link-alt me-1"></i>
                                Live Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>

          <Row className="mb-5">
            <Col lg="12">
              <h1 className="display-4 mb-4">Skills & Technologies</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <div className="skills-container">
                <Row>
                  <Col lg="6" className="mb-4">
                    <div className="skill-category">
                      <h4 className="skill-category-title">
                        <i className="fas fa-code text-primary me-2"></i>
                        Languages
                      </h4>
                      <div className="skill-tags">
                        {skills.languages.map((skill, index) => (
                          <span key={index} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Col>

                  <Col lg="6" className="mb-4">
                    <div className="skill-category">
                      <h4 className="skill-category-title">
                        <i className="fas fa-globe text-primary me-2"></i>
                        Web & Prototyping
                      </h4>
                      <div className="skill-tags">
                        {skills.webPrototyping.map((skill, index) => (
                          <span key={index} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Col>

                  <Col lg="6" className="mb-4">
                    <div className="skill-category">
                      <h4 className="skill-category-title">
                        <i className="fas fa-cloud text-primary me-2"></i>
                        Cloud & DevOps
                      </h4>
                      <div className="skill-tags">
                        {skills.cloudDevops.map((skill, index) => (
                          <span key={index} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Col>

                  <Col lg="6" className="mb-4">
                    <div className="skill-category">
                      <h4 className="skill-category-title">
                        <i className="fas fa-cogs text-primary me-2"></i>
                        Libraries & Frameworks
                      </h4>
                      <div className="skill-tags">
                        {skills.librariesFrameworks.map((skill, index) => (
                          <span key={index} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <h1 className="color_sec py-4">Experience</h1>
            </Col>
          </Row>

          <Row className="mb-5">
            {experience.map((data, i) => {
              return (
                <Col lg="6" className="mb-4" key={i}>
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{data.jobtitle}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{data.where}</h6>
                      <p className="card-text mb-2">{data.date}</p>
                      {data.description && (
                        <p className="card-text">{data.description}</p>
                      )}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>

          <Row className="sec_sp mb-5">
            <Col lg="12">
              <h3 className="color_sec py-4">Professional Development</h3>
            </Col>
            {services.map((data, i) => {
              return (
                <Col lg="12" key={i}>
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <div className="row">
                        {data.description.map((desc, index) => (
                          <div key={index} className="col-md-6 mb-2">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-certificate text-primary me-2"></i>
                              <span>{desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <h1 className="display-4 mb-4">Education</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h3 className="card-title mb-1">{education.degree}</h3>
                      <h5 className="card-subtitle mb-2 text-muted">{education.school}, {education.location}</h5>
                      <p className="card-text mb-3">{education.graduation}</p>
                    </div>
                    <div className="text-end">
                      <span className="badge bg-primary">Dean's List</span>
                    </div>
                  </div>
                  <div className="achievements">
                    <h6 className="mb-3">Key Achievements:</h6>
                    <ul className="list-unstyled">
                      {education.achievements.map((achievement, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-graduation-cap text-primary me-2"></i>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="intro_btn-action pb-5 text-center">
            <Link to="/portfolio" className="text_2">
              <div id="button_p" className="ac_btn btn">
                Home page
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </Link>
            <Link to="/contact">
              <div id="button_h" className="ac_btn btn">
                Contact Me
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </Link>
          </div>
        </div>    
       
      </Container>
    </HelmetProvider>
  );
};
