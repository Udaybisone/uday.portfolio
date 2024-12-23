import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I'am a creative front-end developer who turns ideas into engaging and user-friendly web experiences
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I'am backend developer who crafts robust and scalable server-side solutions to power seamless digital experiences
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.clgicon} src={getImageUrl("about/clgicon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3> Education</h3>
              <p>
                I am a B.Tech student specializing in Electronics and Communication Engineering at {' '}  
                  <a href="https://iiitbhopal.ac.in/#/website/home" target="_blank" style={{ color: 'rgb(15, 94, 239)', textDecoration: 'none' }}>
                    IIIT Bhopal
                  </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
