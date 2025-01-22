/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React, {useState} from "react";

/**
 * Carrousel Images:
 */
import image1 from "../images/projects/cuatasWebsite.png";
import image2 from "../images/projects/Estilist.png";
import image3 from "../images/projects/CodeFront.png";
import image4 from "../images/projects/PetCare.png";
import image5 from "../images/projects/MiawChess.png";
import image6 from "../images/projects/Imjustgirl.png";
import image7 from "../images/projects/signmatch.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];

const imageAltText = [
  "CUATAS Project",
  "Resume Site",
];

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
      "Fashion discovery platform offering personalized style recommendations based on user preferences and colorimetry",
    url: "https://github.com/estilist/",
  },
  {
    title: "CodeFront",
    description:
      "Website deploy application that allows users to fetch and view news articles from multiple online sources in one place.",
    url: "https://github.com/keevin-21/CodeFront/tree/andrea",
  },
  {
    title: "PetCare",
    description:
      "Pet information management web Application.",
    url: "https://github.com/andreagori/PetCare",
  },
  {
    title: "MeawChess",
    description:
      "Chess game using OPP with customized cat-themed",
    url: "https://github.com/andreagori/MiawChess",
  },
  {
    title: "Imjustgirl Chatbot",
    description:
      "The chatbot will ask the user some questions about their preferences and then it will show them some nails designs that they might like.",
    url: "https://andreagori.github.io/chatbot_imjustgirl/",
  },
  {
    title: "SignMatch",
    description:
      "Educational memory game for learning sign language.",
    url: "https://github.com/andreagori/signmatchgame",
  },
];

const Portfolio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="padding" id="portfolio" style={{ backgroundColor: "rgb(14, 14, 16)" }}>
      <h2 style={{ textAlign: "center", color: "white" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        {/* Carrusel de imágenes */}
        <div style={{ maxWidth: "40%", alignSelf: "center", position: "relative", marginLeft: "3rem" }}>
          <img
            src={images[currentImageIndex]}
            alt={imageAltText[currentImageIndex]}
            style={{ height: "90%", width: "100%", objectFit: "cover", borderRadius: "10px"}}
          />
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
          >
            ❯
          </button>
        </div>

        {/* Lista de proyectos */}
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small" style={{ color: "white" }}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;