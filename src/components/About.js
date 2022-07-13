import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <p>Welcome and thank you for visiting my site.</p>
      <img src={image} alt='I made this'></img>
    </div>
  )
}

export default About;
