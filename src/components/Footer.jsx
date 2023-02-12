import React from "react";
import "../style/Footer.css";

function Footer({ setMode }) {
  return (
    <div
      className="footer_container"
      style={{ backgroundColor: setMode[1], color: setMode[0] }}
    >
      <h5>Copyright © 2022. All rights reserved.</h5>
    </div>
  );
}

export default Footer;
