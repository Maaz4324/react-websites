import React from "react";
import "../style/Website.css";
import { websites } from "../components/Webdata";
import { motion } from "framer-motion";

function Website() {
  return (
    <div className="react_container">
      <div className="react_head proj_comm_h">
        <h3>
          I made these website works using HTML, CSS, javascript and reacts js.
          You can find the code in my Github repo, the link is available above.
          You can also visit the website by clicking on the image.
        </h3>
      </div>
      <div className="react_img_container">
        {websites.map((Web, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="react_img"
          >
            <a href={Web.link} target="_blank">
              <img src={Web.web} alt="" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Website;
