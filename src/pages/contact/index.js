import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig , socialprofils } from "../../content_option";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! ,Thankyou for your messege",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Youssef Jedidi - Computer Engineering Student | AI/ML Developer</title>
          <meta name="description" content="Get in touch with Youssef Jedidi, Computer Engineering student at Concordia University. Contact me for AI/ML projects, full-stack development opportunities, or collaboration inquiries." />
          <meta name="keywords" content="contact Youssef Jedidi, Computer Engineering student, Concordia University, AI/ML developer, full-stack developer, software engineer, collaboration, project inquiries" />
          <link rel="canonical" href="https://youssefjedidi.github.io/my_portfolio/contact" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://youssefjedidi.github.io/my_portfolio/contact" />
          <meta property="og:title" content="Contact Youssef Jedidi - Computer Engineering Student | AI/ML Developer" />
          <meta property="og:description" content="Get in touch with Youssef Jedidi for AI/ML projects, full-stack development opportunities, and collaboration inquiries." />
          <meta property="og:image" content="https://youssefjedidi.github.io/my_portfolio/images/my_pic.jpeg" />
          <meta property="og:image:alt" content="Contact Youssef Jedidi - Computer Engineering Student" />
          <meta property="og:site_name" content="Youssef Jedidi Portfolio" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://youssefjedidi.github.io/my_portfolio/contact" />
          <meta property="twitter:title" content="Contact Youssef Jedidi - Computer Engineering Student | AI/ML Developer" />
          <meta property="twitter:description" content="Get in touch with Youssef Jedidi for AI/ML projects and full-stack development opportunities." />
          <meta property="twitter:image" content="https://youssefjedidi.github.io/my_portfolio/images/my_pic.jpeg" />
          <meta property="twitter:image:alt" content="Contact Youssef Jedidi - Computer Engineering Student" />
          <meta property="twitter:creator" content="@youssefjedidi" />
          <meta property="twitter:site" content="@youssefjedidi" />

          {/* Contact specific meta */}
          <meta name="author" content="Youssef Jedidi" />
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="theme-color" content="#b2c4e3" />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              //show={formData.show}
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
            <strong>Linkedin:</strong>{" "}
              <a href={socialprofils.linkedin}>
              in/youssef-jedidi/
              </a>
              <br />
              <br />
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p style={{display:"none"}}>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
              <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
