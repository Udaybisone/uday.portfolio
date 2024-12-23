import React from "react";
import { SiLeetcode } from "react-icons/si";

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
            <img src={getImageUrl("contact/leetcode.png")} alt="Leetcode"/>
          </a>

          <a href="https://leetcode.com/u/udaybisone/" target="_blank">
            <img src={getImageUrl("contact/codechef.png")} alt="Github icon" />
          </a>

          <a href="mailto:udaybisone10@gmail.com" target="_blank">
            <img src={getImageUrl("contact/gfg.png")} alt="Email icon" />
          </a>

          <a href="mailto:udaybisone10@gmail.com" target="_blank">
            <img src={getImageUrl("contact/codeforces.png")} alt="Email icon" />
          </a>
        </div>

        <a href="./Uday_CV.pdf" download="uday.resume" className={styles.contactBtn}>
          Explore My Potential
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
