import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Youssef Jedidi - Computer Engineering Student | AI/ML Developer Portfolio</title>
          <meta name="description" content="Welcome to Youssef Jedidi's portfolio. Computer Engineering student at Concordia University specializing in AI/ML, full-stack development, and innovative software solutions. Explore my projects and get in touch." />
          <meta name="keywords" content="Youssef Jedidi, Computer Engineering, Concordia University, AI/ML, Machine Learning, Full Stack Developer, Software Engineer, Portfolio, React Developer, Python Developer" />
          <link rel="canonical" href="https://youssefjedidi.github.io/my_portfolio/" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://youssefjedidi.github.io/my_portfolio/" />
          <meta property="og:title" content="Youssef Jedidi - Computer Engineering Student | AI/ML Developer Portfolio" />
          <meta property="og:description" content="Computer Engineering student at Concordia University specializing in AI/ML and full-stack development. Explore my innovative software solutions and projects." />
          <meta property="og:image" content="https://youssefjedidi.github.io/my_portfolio/images/my_pic.jpeg" />
          <meta property="og:image:alt" content="Youssef Jedidi - Computer Engineering Student" />
          <meta property="og:site_name" content="Youssef Jedidi Portfolio" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://youssefjedidi.github.io/my_portfolio/" />
          <meta property="twitter:title" content="Youssef Jedidi - Computer Engineering Student | AI/ML Developer Portfolio" />
          <meta property="twitter:description" content="Computer Engineering student at Concordia University specializing in AI/ML and full-stack development." />
          <meta property="twitter:image" content="https://youssefjedidi.github.io/my_portfolio/images/my_pic.jpeg" />
          <meta property="twitter:image:alt" content="Youssef Jedidi - Computer Engineering Student" />
          <meta property="twitter:creator" content="@youssefjedidi" />
          <meta property="twitter:site" content="@youssefjedidi" />

          {/* Performance optimizations */}
          <link rel="preload" href="/images/my_pic.jpeg" as="image" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />

          {/* Additional SEO */}
          <meta name="author" content="Youssef Jedidi" />
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="theme-color" content="#b2c4e3" />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
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
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
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
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
