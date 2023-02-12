import React from "react";
import "../style/Card.css";
import { motion } from "framer-motion";

function Card(props) {
  return (
    <motion.div
      className="card_container"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      style={{ backgroundColor: props.bgColor }}
    >
      <div className="card_logo">
        <img src={props.logo} alt="" />
      </div>
      <div className="card_text">
        <h2>{props.title}</h2>
        <h3>{props.text}</h3>
      </div>
    </motion.div>
  );
}

export default Card;
