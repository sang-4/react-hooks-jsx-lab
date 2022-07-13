import React from "react";
import { image } from "../data/data"; 


function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>I am a Software Engineering student at Moringa School, aspiring to be a Fullstack JavaScript Developer. Proficient in HTML, CSS, JavaScript and some bit of React</p>
    <img src={image} alt="I made this"/>
  </div>
}

export default About;
