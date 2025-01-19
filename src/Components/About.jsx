/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 */
import image from "../images/sr.images.wallpaper.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a student of Software Engineering and Emerging Technologies at the Autonomous University of Baja California. Currently, I am looking to have experience in the area of ​​software development as a Back-End, data analyst, but open to opportunities to nurture my knowledge and enthusiastically contribute my grain of sand.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */

const skillsList = ["C", "C++", "Python", "Java", "SQL", "Learning Data Analytics and Web Development"];

const detailOrQuote =
  "I am deeply committed to advancing my skills in software development, as reflected in the courses and certifications I have completed. My goal is to create intuitive solutions that address real-world needs and contribute to making technology more accessible and impactful.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
