import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Slider.css";
import data from "./data.js";

function Slider() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 7000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <>
      <div className="slide__container">
        {people.map((person, personIndex) => {
          const { id, image } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className="old__article" key={id}>
              <img className={`home__image ${position}`} src={image} />
            </article>
          );
        })}
      </div>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <ArrowBackIosIcon sx={{ opacity: "0.5" }} fontSize="large" />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <ArrowForwardIosIcon sx={{ opacity: "0.5" }} fontSize="large" />
      </button>
    </>
  );
}

export default Slider;
