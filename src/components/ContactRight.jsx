import React from "react";
import "../style/ContactRight.css";
import { motion } from "framer-motion";

function ContactRight({ setMode }) {
  return (
    <div className="contact_right">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea name="textarea" placeholder="Message"></textarea>
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, backgroundColor: "white", color: "black"  }}
        whileTap={{ scale: 0.9 }}
        className="contact_submit"
        style={{
          backgroundColor: setMode[2],
          color: setMode[0],
          borderColor: setMode[2],
        }}
      >
        submit
      </motion.button>
    </div>
  );
}

export default ContactRight;
