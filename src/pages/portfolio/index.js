import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta  ,
  dataabout,
  experience,
  skills,
  services,
  introdata,
 } from "../../content_option";
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
        <Col lg="5" style={{display:"flex", margin:"5vh", width: "100vw"}}>
        <div>
          <h1 style={{}}>Hello , I am </h1><h1 className="Name"> {meta.title} </h1>
        </div>{" "}
        <img 
                src="/images/my_pic.jpeg" 
                alt="Profile" 
                className="profile-pic" 
            />
        </Col>
        <p>
        A Computer Engineering student from Canada. I aim to deepen my understanding in various areas of technology and product development.
        </p>
          <div className="intro mx-auto">
                <h2 className="Name">
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
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
          <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="youssef jedidi , software engineering , Ai Ml , Montreal" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
        <div /*style={{ display: "none" }}*/>
        <Col lg="5">
            <h1 className="color_sec py-4"> Experience </h1>{" "}
          </Col>
          
        </div>
          <table className="table caption-top">
              <tbody>
                {experience.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
            <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Certificates</h3>
          </Col>
          <Col lg="10">
          
              {services.map((data, i) => {
                return (
                  <div className="service_ py-4" key={i}>
                    <h5 className="service__title">{data.title}</h5>
                    <ul className="service_desc">
                      {data.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}

          </Col>
          <div className="intro_btn-action pb-5" style={{textAlign:"center"}} >
                  <Link to="/" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
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
        
        </Row>
        
        </Row>    
       
      </Container>
    </HelmetProvider>
  );
};
