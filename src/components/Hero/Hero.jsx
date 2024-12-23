import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, This is Uday</h1>
        <p className={styles.description}>
        I'm a MERN stack developer ready to create impactful web applications—let's connect!
        </p>
        
        <div className={styles.logos}>

          <a href="https://github.com/Udaybisone" target="_blank">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          </a>

          <a href="https://www.linkedin.com/in/uday-bisone-95aa21259/" target="_blank">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          </a>

          <a href="mailto:udaybisone10@gmail.com" target="_blank">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
        </div>
        <a href="./Uday_CV.pdf" download="uday.resume" className={styles.contactBtn}>
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
