import Header from "../Component/Header";
import Footer from "../Component/Footer";
import React from "react";

import "./About.css";

function About() {
   
  return (<div className="about-page">

         <Header
  heroTitle="About Seeflix"
  heroTagline="Discover our mission and vision"
  heroButtonLink="Learn More"
  showSocials={true}
  background="/assets/About.back1.jpg"
/>
    <section className="about">
  
      
      <div className="about-intro">
  <h1>About Seeflix</h1>

  <p>
    Seeflix is a modern streaming platform designed and developed by
    <strong> Narcisse Jean </strong>. It was created as a learning and
    development project to explore how real-world movie platforms work
    using modern web technologies.
  </p>

  <p>
    This platform allows users to discover popular, top-rated, and
    upcoming movies in a simple and fast interface powered by real data.
    The goal is to deliver a smooth and enjoyable movie browsing
    experience similar to professional streaming services.
  </p>

  <p>
    Seeflix is also part of my journey in computer science and web
    development, where I combine creativity, design, and programming
    to build real-world applications.
  </p>
</div>

<div className="about-mission">
  <h2>Our Mission</h2>

  <p>
    Our mission is to make entertainment accessible to everyone by
    providing a clean, fast, and user-friendly platform. We believe
    that movies and stories have the power to connect people across
    cultures and backgrounds.
  </p>

  <p>
    Through Seeflix, we aim to continuously improve the user experience,
    add smart features like search and filtering, and build a platform
    that feels modern and professional.
  </p>
</div>

<div className="about-contact">
  <h2>Contact</h2>

  <p>
    This project is developed by <strong>Narcisse Jean</strong>.
  </p>

  <p>
    For collaboration, feedback, or technical support, you can reach me
    through my contact page or social media links provided in the platform.
  </p>
</div>

    </section>
    <Footer/>
</div>  );
}

export default About;