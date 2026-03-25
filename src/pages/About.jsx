import Header from"../Component/Header";
import Footer from"../Component/Footer";
import React from "react";


import"./About.css"


function About() {
   
  return (<>

         <Header
  heroTitle="About Seeflix"
  heroTagline="Discover our mission and vision"
  heroButtonLink="Learn More"
  showSocials={true}
/>
    <section className="about">
  
      
      <div className="about-intro">
        <h1>About Seeflix</h1>
        <p>
          Seeflix is a modern streaming platform designed to bring you the best
          movies and shows anytime, anywhere. Our goal is to create an
          immersive entertainment experience where users can discover, enjoy,
          and share their favorite content with ease.
        </p>
      </div>

    
      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make entertainment accessible to everyone by
          providing a simple, fast, and enjoyable streaming experience.
          We aim to connect people through stories, creativity, and innovation.
        </p>
      </div>

    </section>
    <Footer/>
</>  );
}

export default About;