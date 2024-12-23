import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>

        <li className={styles.link}>
          <a href="mailto:udaybisone10@gmail.com" target="_blank">
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
          <a href="mailto:udaybisone10@gmail.com" target="_blank">Email</a>
        </li>

        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/uday-bisone-95aa21259/" target="_blank">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          </a>
          <a href="https://www.linkedin.com/in/uday-bisone-95aa21259/" target="_blank">Linkedin</a>
        </li>

        <li className={styles.link}>
          <a href="https://github.com/Udaybisone" target="_blank">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          </a>
          <a href="https://github.com/Udaybisone" target="_blank">Github</a>
        </li>
      </ul>
    </footer>
  );
};
