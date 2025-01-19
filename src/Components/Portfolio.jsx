/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 */
import image from "../images/roman-synkevych-vXInUOv1n84-unsplash.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "CUATAS, the brand where I'm a co-founder",
    description:
      "CUATAS is a brand that sells personalized products, satisfying the client desires. I'm in charge of the social media and working process.",
    url: "https://www.facebook.com/people/Cuatas/61553703365388/",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and resume.",
    url: "https://andreagori.github.io/git-resume-showcase/",
  },
  {
    title: "Estilist",
    description:
      "...",
    url: "",
  },
  {
    title: "CodeFront",
    description:
      "...",
    url: "",
  },
  {
    title: "PetCare",
    description:
      "...",
    url: "",
  },
  {
    title: "SignMatch",
    description:
      "...",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{ backgroundColor: "rgb(14, 14, 16)" }}>
      <h2 style={{ textAlign: "center", color: "white" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small" style={{color:"white"}}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
