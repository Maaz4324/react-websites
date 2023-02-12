import React from "react";
import "../style/ContactLeft.css";
import { motion } from "framer-motion";

function ContactLeft({ setMode }) {
  return (
    <div className="left_container">
      <div className="left_head">
        <h1>GET IN TOUCH</h1>
        <h3>
          Please feel free to contact me anytime. I'll surely respond within an
          hour or two. Given below are my social media links, email address, and
          phone number.
        </h3>
      </div>
      <div className="media_icon">
        <a href="https://twitter.com/iamMaazHamed" target="_blank">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 24 24"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <path
              fill={setMode[0]}
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"
            />
          </motion.svg>
        </a>
        <a
          href="https://www.linkedin.com/in/ma-az-hamed-20431b220/"
          target="_blank"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 24 24"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <path
              fill={setMode[0]}
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
            />
          </motion.svg>
        </a>
        <a
          href="https://www.youtube.com/channel/UC03NOBNm_EO3sYlbcqdY1Zg"
          target="_blank"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 24 24"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <path
              fill={setMode[0]}
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"
            />
          </motion.svg>
        </a>
      </div>
      <div className="mail_contact">
        <div className="phone mail_content">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            fill={setMode[0]}
          >
            <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376" />
          </svg>
          <h4>maazahmed4324@gmail.com</h4>
        </div>
        <div className="mail mail_content">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            fill={setMode[0]}
          >
            <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
          </svg>
          <h4>+91 9831169844</h4>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
