import React from "react";
import "../style/Python.css";
import aquila from "../images/aquilagif.gif";
import car from "../images/carrace.gif";
import alien from "../images/alienshoot.gif";
import { motion } from "framer-motion";

function Python() {
  return (
    <div className="python_container">
      <div className="python_head proj_comm_h">
        <h3>
          Here are some of my python projects, two games from scratch and an AI.
          You can find the code of the AI in my GitHub repo but I,
          unfortunately, lost the game's code. You can watch the whole video on
          youtube. Click the watch videos button below.
        </h3>
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={alien} className="d-block w-90" alt="..." />
          </div>
          <div className="carousel-item">
            <motion.img src={aquila} className="d-block w-90" alt="..." />
          </div>
          <div className="carousel-item">
            <motion.img src={car} className="d-block w-90" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="btn_carousel_container">
        {" "}
        <a
          href="https://www.youtube.com/channel/UC03NOBNm_EO3sYlbcqdY1Zg"
          target="_blank"
        >
          <motion.button
            className="btn_carousel"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Watch videos
          </motion.button>
        </a>
      </div>
    </div>
  );
}

export default Python;
